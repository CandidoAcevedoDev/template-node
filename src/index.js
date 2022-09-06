import '#Config/env.js'
import connectDB from "#Config/db.js"
import httpServer from "#Config/http.config.js"


const initial = async () => {
    await connectDB(process.env.MONGO_URL)
    httpServer.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}`)})
}

initial()