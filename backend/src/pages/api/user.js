import userController from "@/database/controller/UserController"

export default async function handler(req, res) {
   const response = await userController.userCOntroller.saveUser(req.body)
   .then((data)=>{
      console.log(data)
   })
   .catch(err=>{
      console.log(err)
   })

   res.status(200).json(response)
}