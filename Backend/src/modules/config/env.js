require('dotenv').config();
const env ={
    port: process.env.PORT,
    mongoURI: process.env.MONGO_URI ,
    jwtSecret: process.env.JWT_SECRET
}
module.exports = env;