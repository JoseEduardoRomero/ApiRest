const {Schema,model} = require('mongoose');
const bycript = require('bcrypt')
const UserSchema = new Schema({
    firstName: {type: String,required: true}, //Esto es para que a la de afuerza se mande
    lastName: {type: String,required: true},
    email: {type: String,required: true},
    password: {type: String,required: true},
    products:{type: Array, required: false}
},{timestamps: true})

//Metodo para encriptar la contraseña
UserSchema.methods.encryptPassword = async password =>{
    const salt = await bycript.genSalt(10)
    return await bycript.hash(password,salt)
}

//Metodo para comparar contraseña encriptada
UserSchema.methods.matchPassword = async function (password) {
    return await bycript.compare(password, this.password )
    //Devolvera un bolean
}


module.exports = model('User',UserSchema)