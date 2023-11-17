const Controller = require("../controllers/controller");
const router = require("express").Router();
const authentication = require("../middlewares/authentication");
const authorization = require("../middlewares/authorization");
const fetchTokenPetFinder = require("../helpers/fetchTokenPetFinder");

//POST REGISTER
router.post("/register", Controller.register);

//POST LOGIN
router.post("/login", Controller.login);

//Public read data
router.get("/adoptme", Controller.readAnimalPub);

//Public Detail

// router.get("/adoptme/:id", (req, res) => {
//   res.send({ message: `${req.params.id}` });
// });
router.get("/adoptme/:id", Controller.detailAnimalPub);

//Public checkout
router.post("/adoptme/:id/order", Controller.checkoutAnimalPub);

//payment
router.get("/payment/midtrans/token", Controller.getMidtransToken);

//Public Payment
// router.post("/adoptme/:id/order/payment", Controller.paymentAnimalPub);

//Public Notification(resi)
// router.get("/notif/payment", Controller.notification);

//Authentication
// router.use(authentication);

//cmsreadAnimalOrder
// router.get("/order", Controller.readOrder);

//cmsdetailAnimalOrder
// router.get("/order/:id", Controller.detailOrder);

//cmsupdateAnimalOrder
// router.put("/order/:id", authorization, Controller.editOrder);

//cmsdeleteAnimalOrder
// router.delete("/order/:id", Controller.deleteOrder);

module.exports = router;
