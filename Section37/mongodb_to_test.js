const mongoose = require('mongoose');
const db = mongoose.connection;
// db.on('error', console.error.bind(console,  'connection error: '));
// db.once('open', () => console.log('connection open'));



mongoose.connect('mongodb+srv://marko:<password>@nodeprojectcourse.50zdp07.mongodb.net/local?retryWrites=true&w=majority&appName=NodeProjectCourse')
.then(() => {
    console.log('connection open');
})
.catch((err) => {
    console.log(`Error occurred: ${err}`);
});





// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://marko:<password>@nodeprojectcourse.50zdp07.mongodb.net/?retryWrites=true&w=majority&appName=NodeProjectCourse";
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



// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://marko:<password>@nodeprojectcourse.50zdp07.mongodb.net/local?retryWrites=true&w=majority&appName=NodeProjectCourse";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// client.connect()
// .then(() => {
//     console.log('connection open');
// });

