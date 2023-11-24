const Controller = require("../controllers/controller");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const fetchTokenPetFinder = require("../helpers/fetchTokenPetFinder");

//POST REGISTER
router.post("/register", Controller.register);

//POST LOGIN
router.post("/login", Controller.login);

// google signin
router.post("/google-sign", Controller.googleSign);

//Authentication
router.use(authentication);

//Public read data
router.get("/adoptme", Controller.readAnimalPub);

//Public order
router.post("/adoptme/order/:id", Controller.OrderSummary);

//Public Detail
// router.get("/adoptme/:id", (req, res) => {
//   res.send({ message: `${req.params.id}` });
// });
router.get("/adoptme/:id", Controller.detailAnimalPub);

//payment
router.post("/payment/:id", Controller.purchaseXendit);

//getUserInfo
router.get("/user/:id", Controller.getUserInfo);

//updateUserAccount
router.patch("/user/:id", Controller.updateUserAccount);

//deleteUserAccount
router.delete("/user/:id", Controller.deleteUserAccount);

module.exports = router;
