let mongoose= require('mongoose')
let express= require('express')
const cors=require('cors')
let app=express()
let db="mongodb+srv://akshay:akshay@cluster1.rnzyx6z.mongodb.net/db1"
app.use(express.json())
app.use(cors())


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://akshay:akshay@cluster1.rnzyx6z.mongodb.net/db1?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);


mongoose.connect(db,{
  // useNewUrlParser:true,
  // useUnifiedTopology:true
}).then(()=>{
  console.log('connected')
}).catch((e)=>{
  console.log('not connected',e)
})


// let aritclesSchema=new mongoose.Schema({
//   articleObject:Object
// })
// let articlesModel=mongoose.model('articles',aritclesSchema)


// app.get('/',async(req,resp)=>{
//    let result= await articlesModel.find({})
//    resp.send(result)
// })

// app.post('/',async(req,resp)=>{
//   let result= new articlesModel(req.body)
//   result=await result.save()
//   resp.send(result)
// })
app.listen(8000)