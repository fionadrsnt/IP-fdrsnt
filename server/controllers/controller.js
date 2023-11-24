const { User, Order } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const axios = require("axios");
const fetchTokenPetFinder = require("../helpers/fetchTokenPetFinder");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const { Invoice } = require("xendit-node");

class Controller {
  static async register(req, res, next) {
    try {
      const { fullName, email, password, phoneNumber, address } = req.body;
      let UserCreate = await User.create({
        fullName,
        email,
        password,
        phoneNumber,
        address,
      });
      res.status(201).json({
        id: UserCreate.id,
        email: UserCreate.email,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) {
        throw { message: "Email is required!" };
      }
      if (!password) {
        throw { message: "Password is required!" };
      }
      let user = await User.findOne({ where: { email } });
      if (!user) {
        throw { message: "Invalid email/password" };
      }
      let checkPassword = comparePassword(password, user.password);
      if (!checkPassword) {
        throw { message: "Invalid email/password" };
      }
      let payload = {
        id: user.id,
        email: user.email,
      };
      let token = signToken(payload);
      res.status(200).json({
        id: user.id,
        access_token: token,
        email: user.email,
        role: user.role,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async readAnimalPub(req, res, next) {
    // let petFinderToken = null;
    try {
      const tokenUntukPetfinder = await fetchTokenPetFinder();
      //   if (!petFinderToken) {
      //     petFinderToken = await fetchTokenPetFinder();
      //   }
      //   console.log(petFinderToken);

      console.log(tokenUntukPetfinder);
      const { data } = await axios.get(
        `https://api.petfinder.com/v2/animals/?limit=${6}`,
        {
          headers: {
            Authorization: `Bearer ${tokenUntukPetfinder}`,
          },
        }
      );

      res.status(200).json({ data });
      //   res.status(200).json({});
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async detailAnimalPub(req, res, next) {
    // console.log("ini masuk");
    try {
      const tokenUntukPetfinder = await fetchTokenPetFinder();
      //   console.log(tokenUntukPetfinder);

      //   console.log(req.params);
      let { id } = req.params;
      //   console.log(id);
      const { data } = await axios.get(
        `https://api.petfinder.com/v2/animals/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenUntukPetfinder}`,
          },
        }
      );
      res.status(200).json({ data });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async OrderSummary(req, res, next) {
    try {
      const { userId } = req.loginInfo;
      const tokenUntukPetfinder = await fetchTokenPetFinder();
      let { id } = req.params;
      const { data } = await axios.get(
        `https://api.petfinder.com/v2/animals/${id}`,
        {
          headers: {
            Authorization: `Bearer ${tokenUntukPetfinder}`,
          },
        }
      );
      console.log(data, "125");
      const payload = {
        petName: data.animal.name,
        petType: data.animal.type,
        totalPrice: Math.round(1000000 + Math.random() * 10000000),
        statusOrder: "unpaid",
        userId: userId,
        invoiceUrl: data.animal.invoiceUrl,
      };
      let newOrder = await Order.create(payload);
      res.status(201).json({ newOrder });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async purchaseXendit(req, res, next) {
    try {
      const { id } = req.params;
      const invoiceService = new Invoice({
        secretKey: process.env.XENDIT_SECRET_KEY,
      });
      let order = await Order.findOne({
        where: {
          id,
        },
      });
      console.log(order, "ini");
      const data = {
        amount: order.totalPrice,
        invoiceDuration: 172800,
        externalId: order.externalId,
        description: "Pet Adoption Payment ",
        currency: "IDR",
        reminderTime: 1,
      };
      // console.log(data);

      const response = await invoiceService.createInvoice({
        data,
      });
      // console.log(invoiceService.createInvoice, 159);

      res.status(200).json(response);
    } catch (error) {
      next(error);
      console.log(error);
    }
  }

  static async getUserInfo(req, res, next) {
    try {
      const { id } = req.params;
      let dataUser = await User.findAll({ where: { id } });
      res.status(200).json({
        dataUser,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async updateUserAccount(req, res, next) {
    try {
      const { fullName, email, password, phoneNumber, address } = req.body;
      const { id } = req.params;
      let data = await User.findByPk(id);
      if (!data) {
        throw {
          message: "Error not found",
        };
      }
      await User.update(
        {
          fullName,
          email,
          password,
          phoneNumber,
          address,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      res.status(200).json({
        data,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  static async deleteUserAccount(req, res, next) {
    try {
      const { id } = req.params;
      let data = await User.findByPk(id);
      if (!data)
        throw {
          message: "Error not found",
        };
      await User.destroy({
        where: {
          id,
        },
      });
      res.status(200).json({
        message: `success to delete`,
      });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
  static async googleSign(req, res, next) {
    try {
      console.log(req.headers);
      const ticket = await client.verifyIdToken({
        idToken: req.headers.access_token,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      const payload = ticket.payload;
      console.log(payload);
      const [user, isCreated] = await User.findOrCreate({
        where: {
          email: payload.email,
        },
        defaults: {
          fullName: payload.name,
          email: payload.email,
          password: "google-password",
          address: "google-address",
        },
        hooks: false,
      });
      const access_token = signToken({
        id: user.id,
        // username: user.username,
        email: user.email,
      });
      res.status(200).json({
        access_token,
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = Controller;
