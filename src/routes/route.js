const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController=require("../controllers/productController")
const OrderController=require("../controllers/orderController")
const IsFreeAppUser=require("../middlewares/isFreeAppUserMW")




router.post("/createUser", IsFreeAppUser.isFreeAppUser,UserController.createUser )
router.post("/createProduct", ProductController.createProduct )
router.post("/createOrder", OrderController.createOrder )


module.exports = router;




// router.post("/createBook", commonMW.abc, BookController.createBook  )

// router.post("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.abc, UserController.basicCode, commonMW.mid4)