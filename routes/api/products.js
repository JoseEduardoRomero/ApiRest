const express = require("express");
const router = express.Router();
const ProductsService = require("../../services/products");

const ProductService = new ProductsService();

//Todo esto es un controlador
//Los routes deberian de llamar a algun servicio

router.get("/getProducts", async function (req, res, next) {
  const { tags } = req.query; //Esto servira para filtar productos si quieren filtrado, o si no devolver todos uno solo
  try {
    const products = await ProductService.getProducts({ tags });
    res.status(200).json({
      data: products,
      message: "products listed",
    });
  } catch (err) {
    next(err);
  }
});


router.get("/getProduct/:productId", async function (req, res,next) {
  const { productId } = req.params;
  try {
    const product = await ProductService.getProduct({ productId });
    res.status(200).json({
      data: product,
      message: "products retrieved",
    });
  } catch (err) {
    next(err);
  }
});

router.post("/addProduct", async function (req, res, next) {
    const { body: product } = req;
  try {
    //Lo de body: product es un alias
    const createProduct = await ProductService.createProduct({ product });
    res.status(201).json({
      id_: createProduct,
      message: "product Add",
      status: true
    });
  } catch (err) {
   res.status(400).json({
     status: false,
     message: 'Error'
   })
  }
});


router.put("/updateProduct/:productId",async  function (req, res,next) {
    const { productId } = req.params;
    const { body: product } = req;
  try {
    const updateProduct = await ProductService.updateProduct({ productId, product });
    res.status(200).json({
      _id: updateProduct,
      message: "products updated",
    });
  } catch (err) {
    next(err);
  }
});


router.delete("/deleteProduct/:productId", async function (req, res,next) {
  const {productId} = req.params
  try {
    const product = await ProductService.deleteProduct({ productId });
    res.status(200).json({
      _id: product,
      message: "products delete",
      success: true
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: 'Error'
    })
  }
});

module.exports = router;
// productMock se le llama a los datos que son harcodeados, o que no vienen de ninguna base de datos
