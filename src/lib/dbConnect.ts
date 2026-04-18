import mongoose from "mongoose";

type ConnectionObject = {
    isConnected?: number 
}

const connection : ConnectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("Already connnected to database")
        return
    }

    try {
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})

        connection.isConnected=db.connections[0].readyState

        console.log("DB connected Successfully")
    } catch (error) {
        
        console.log("DB connection Fail" , error)
        process.exit()
    }
}

export default dbConnect

//Note Next js is edge case and it will create multiple instances of
//  the app and each instance will create a new connection to the database.
//  To avoid this we can use a global variable to store the connection status and
//  check it before creating a new connection.