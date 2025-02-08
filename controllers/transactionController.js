const Transaction = require("./../models/transactionModel");
const factory = require("./handlerFactory");
const AppError = require("./../utils/appError");

exports.setProductIdAndUpdatedValues = (req, res, next) => {
  // Check product user ids
  if (req.body.product) {
    req.body.updatedValues = { "quantity": req.body.quantity }
    req.body.idToUpdate = req.body.product
  } else {
    return next(
      new AppError(
        'Lack of data.',
        400
      )
    );
  }

  next();
};

exports.getAllTransaction = factory.getAll(Transaction);
exports.getTransaction = factory.getOne(Transaction);
exports.createTransaction = factory.createOne(Transaction);
exports.updateTransaction = factory.updateOne(Transaction);
exports.deleteTransaction = factory.deleteOne(Transaction);
