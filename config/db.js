const mongoose = require('mongoose');

async function connectToMongo(){
   try{
    await mongoose.connect('mongodb+srv://kirags123:8qPEa8KTKBEh2bss@cluster0.f3qlbuo.mongodb.net/course_selling_app')
    .then(()=>{
        console.log("connected to mongo")
    })
   }catch(err){
       console.log(err)
   }
}

module.exports = {
    connectToMongo
}