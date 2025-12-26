const express = require('express');
const productController = require('./../controllers/productController');
const authController = require('./../controllers/authController');
const { handlePhotoUpload, uploadSinglePhoto } = require('../controllers/handlerFactory');

const router = express.Router({ mergeParams: true });

router.use(authController.protect);

router
  .route('/')
  .get(productController.getAllProduct)
  .post(
    authController.restrictTo('user', 'admin'),
    productController.createProduct
  );

router
  .route('/:id')
  .get(productController.getProduct)
  .patch(
    authController.restrictTo('user', 'admin'),
    uploadSinglePhoto,
    handlePhotoUpload,
    productController.updateProduct
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    productController.deleteProduct
  );

module.exports = router;