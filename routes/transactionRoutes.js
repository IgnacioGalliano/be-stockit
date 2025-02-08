const express = require("express");
const transactionController = require("./../controllers/transactionController");
const authController = require("./../controllers/authController");
const productController = require("./../controllers/productController");

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route("/")
  .get(transactionController.getAllTransaction)
  .post(
    authController.restrictTo("user"),
    transactionController.setProductIdAndUpdatedValues,
    productController.getOneAndUpdate,
    transactionController.createTransaction
  );

router
  .route("/:id")
  .get(transactionController.getTransaction)
  .delete(
    authController.restrictTo("user", "admin"),
    transactionController.deleteTransaction
  );
module.exports = router;
