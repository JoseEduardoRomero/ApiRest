
const Product = require ('../models/Products')


class ProductsService {
        //Aqui vamos a pedir un objet como paramaetro, esto para destrcuturarlo en el futuro,
        // y que no importe cuantas cosas nos manden
    async getProducts({tags}){
        const query = tags && {tags: { $in: tags}}
        const products = await Product.find(query)
        return products || []
    }

    async getProduct({productId}){
        return await Product.findOne({_id: productId})
        
    }
     createProduct({product}){
        const newProduct = new Product(product)
       return Product.create(newProduct).then((data) => {return data._id}).catch((err) =>{return err})
    }
    async updateProduct({productId, product }){
            await Product.findByIdAndUpdate({_id: productId},product)
            return productId
    }
    
    async deleteProduct({ productId }){
        const id_product= productId
        return await Product.findOneAndDelete({_id:id_product}, (data, err) =>{if(err){return err}else{return data}})
    }

}
module.exports = ProductsService
