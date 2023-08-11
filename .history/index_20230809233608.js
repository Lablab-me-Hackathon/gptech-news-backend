import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { MongoClient, ServerApiVersion } from 'mongodb'


const app = express();
app.use(cors())

const CONNECTION_URL = process.env.MONGO_URL

const PORT = process.env.PORT || 5000

// mongoose.connect(CONNECTION_URL, {useNewURLParser})

const uri = "mongodb+srv://BrightCoder:b7vxlkHhlNfB0tGv@cluster0.a2eryks.mongodb.net/?retryWrites=true&w=majority";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);