const { Admin } = require("../schemas/admin");

const adminSignup = async(req, res) => {
  const {username, password} = req.body
  
    if(!username || !password){
        res.status(400).json({error:"username and password are required"});
    }
    const existingAdminUsername = await Admin.findOne({username: username})
    if(existingAdminUsername){
        res.status(409).json({error:"username already exists"});
    }
  try{
    const response = await Admin.create({
        username: username,
        password: password
    })
    console.log(response)
    res.status(200).json({message:"Admin created successfully"})
  }catch(err){
    console.log(err) 
    console.log("something wrong in storing admin details")
  }
}

module.exports = {
    adminSignup
}