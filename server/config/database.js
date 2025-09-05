import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const dbInstance = await mongoose.connect(`${process.env.MONOGDB_URI}/${process.env.DB_NAME}`)
        console.log(`DB CONNECTED ${dbInstance.connection.host}`)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

export default connectDB