const Express = require("express");
const {AddItem, GetProductById, UpdateProductById, DelateProductById, GetAllItems} = require("../Controllers/item.controller");


const router = Express.Router();


router.get("/all-item", GetAllItems);
router.post("/add-new-item", AddItem);
router.get("/get-item/:id", GetProductById);
router.put("/update-item/:id", UpdateProductById);
router.delete("/delete-item/:id", DelateProductById);


module.exports = router;
