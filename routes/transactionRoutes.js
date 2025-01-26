// const express = require('express');
// const transactionController = require('./../controllers/transactionController');
// const authController = require('./../controllers/authController');

// const router = express.Router({ mergeParams: true });

// router.use(authController.protect);

// router
//   .route('/')
//   .get(transactionController.getAllTransaction)
//   .post(
//     authController.restrictTo('user'),
//     transactionController.setProductUserIds,
//     transactionController.createTransaction,
//   );

// module.exports = router;