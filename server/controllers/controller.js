const { User, Order, Payment } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const axios = require("axios");
const fetchTokenPetFinder = require("../helpers/fetchTokenPetFinder");
// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
// const { PaymentRequest, Invoice } = require("xendit-node");

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
  // static async checkoutAnimalPub(req, res, next) {
  //   try {
  //     let { id } = req.params;
  //     const { data } = await axios.get(
  //       `https://api.petfinder.com/v2/animals/${id}/order`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${tokenUntukPetfinder}`,
  //         },
  //       }
  //     );
  //     res.status(200).json({ data });
  //   } catch (err) {
  //     console.log(err);
  //     next(err);
  //   }
  // }

  // static async purchaseXendit(req, res, next) {
  //   try {
  //     const invoiceService = new Invoice({
  //       secretKey:
  //         "xnd_development_XYTrscJOGCPBq5BoKG8YoJ4zHHcpzAu6wqAqBLFntNcLOFmZNvRLLw0s35",
  //     });

  //     const data = {
  //       amount: 10000,
  //       invoiceDuration: 172800,
  //       externalId: "test1234",
  //       description: "Test Invoice",
  //       currency: "IDR",
  //       reminderTime: 1,
  //     };
  //     const response = await invoiceService.createInvoice({
  //       data: data,
  //     });

  //     // console.log(response, "<<< response xendit");

  //     res.status(200).json(response);
  //   } catch (error) {
  //     next(error);
  //     console.log(error);
  //   }
  // }
}

module.exports = Controller;
