// Здесь должны быть роуты для получения отчета.

const express = require("express");
const { routes } = require("../../app");

const { transactions: ctrl } = require("../../controllers");
// const { authenticate } = require("../middlewares");

const router = express.Router();

// router.post("/expense", ctrl.addExpense);
// router.post("/income", ctrl.addIncome);

router.post("/", ctrl.addTransaction);

router.get("/expense/currentYear");

module.exports = router;
