const User = require ('../models/User')

class UsersService {
        //Aqui vamos a pedir un objet como paramaetro, esto para destrcuturarlo en el futuro,
        // y que no importe cuantas cosas nos manden
    async getUsers(){
        const users = await User.find()
            return users || []
    }
    async getUser({userId}){
        return await User.findOne({_id: userId})
    }
    createUser({user}){
      const newUser = new User(user)
      return User.create(newUser).then((data) => {return data._id}).catch((err) =>{return err})
    }
    updateUser({userId, user }){
        await Product.findByIdAndUpdate({_id: userId},user)
        return productId
    }
    deleteUser({ userId }){
        return userId
    }
}
module.exports = UsersService
