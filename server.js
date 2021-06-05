const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const connected = require("./config/connectDB");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const notFound = require("./middelwares/errorMiddelwares");
const errorHandler = require("./middelwares/errorMiddelwares");

dotenv.config();
connected();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("APP is running ...");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server up and running on port ${PORT}`);
});
