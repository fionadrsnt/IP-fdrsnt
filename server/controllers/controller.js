const { User, Order, Payment } = require("../models");
const { comparePassword } = require("../helpers/bcryptjs");
const { signToken } = require("../helpers/jwt");
const axios = require("axios");
const fetchTokenPetFinder = require("../helpers/fetchTokenPetFinder");

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
  static async checkoutAnimalPub(req, res, next) {
    try {
      let { id } = req.params;
      const { data } = await axios.get(
        `https://api.petfinder.com/v2/animals/${id}/order`,
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
  // static async getMidtransToken(req, res, next) {
  //   try {
  //     // Create Snap API instance
  //     let snap = new midtransClient.Snap({
  //       // Set to true if you want Production Environment (accept real transaction).
  //       isProduction : false,
  //       serverKey : process.env.MIDTRANS_SERVER_KEY
  //   });
  //   let parameter = {
  //     "transaction_details": {
  //         "order_id": "YOUR-ORDERID-123456",
  //         "gross_amount": 10000
  //     },
  //     "credit_card":{
  //         "secure" : true
  //     },
  //     "customer_details": {
  //         "first_name": "budi",
  //         "last_name": "pratama",
  //         "email": "budi.pra@example.com",
  //         "phone": "08111222333"
  //     }
  // };
  //     })
  //     res.json({message: 'sending token'})
  //   } catch (err) {
  //     next(err)

  //   }
  // }

  static async deleteOrderPub(req, res, next) {
    try {
      let { id } = req.params;
      const { data } = await axios.get();
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

module.exports = Controller;
