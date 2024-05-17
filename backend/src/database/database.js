import mongoose from "mongoose"

mongoose.set("strictQuery", true)

const dbName = "mongoapp"

const url = `mongodb+srv://gabifarinela:${process.env.DB_PWD}@cluster0.cl8fmby.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`

const connect = async () => {
   return await mongoose.connect(url)
}

const disconnect = async () => {
   return await mongoose.disconnect()
}

const database = {
   connect,
   disconnect
}

export default database