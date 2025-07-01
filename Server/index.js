const Express = require("express");
const router = require("./Router/Item.route");
const mongoose = require("mongoose");
var cors = require('cors')

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(cors())

mongoose
  .connect("mongodb://localhost:27017/shop", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.error("Mongo connection error", err));

app.use("/api-data", router);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});
