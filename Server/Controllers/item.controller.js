const Product = require("../MOdules/itemModules");

const AddItem = async (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(404).json({ massage: "Put the title first!" });
  }
  try {
    const product = new Product({ title });
    await product.save();
    res.status(200).json({ massage: "New title added successfully", product });
  } catch (error) {
    console.error("Error putting title", error);
  }
};


const GetAllItems = async (req, res)=>{
    try {
        const products = await Product.find()
        res.status(200).json(products);
    } catch (error) {
        console.error("Error getting data", error);
    }
}




const GetProductById = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id)
        if(!product){
            return res.status(404).json({ massage: "Product is not found" });
        }
        res.json(product)
    } catch (error) {
        console.error("Error putting title", error);
    }
}


const UpdateProductById = async (req, res) =>{
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
        })
        if(!updated){
            return res.status(404).json({ massage: "Product is not found" });
        }
        res.json({message: 'product Updated'})
    } catch (error) {
        console.error("Error putting title", error);
    }
}



const DelateProductById = async (req, res) =>{
    try {
        const deleted = await Product.findByIdAndDelete(req.params.id)
        if(!deleted){
            return res.status(404).json({ massage: "Product is not found" });
        }
        res.json({message: "Product is deleted"})
    } catch (error) {
        console.error("Error putting title", error);
    }
}



module.exports = {AddItem, GetProductById, UpdateProductById, DelateProductById, GetAllItems};
