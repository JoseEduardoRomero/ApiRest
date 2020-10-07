const mongoose = require('mongoose')

const URL = process.env.DB_HOST
const PORT = process.env.DB_PORT
const NAME = process.env.DB_NAME

const MONGO_URI = `${URL}:${PORT}/${NAME}`

mongoose.connect( MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(db => console.log('Database is connect'))
  .catch(err => console.log(err))

// async function getAll (collection,query){
    
//         return await db.collection(collection).find(query).toArray
    
// } 