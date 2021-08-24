if (process.env.USER) require("dotenv").config();
const express = require("express");
const reviewsRouter = require("./reviews/reviews.router");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const app = express();

app.use(express.json());

app.use("/reviews", reviewsRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
