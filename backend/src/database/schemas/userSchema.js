import { Schema, model, models } from "mongoose"

const UserSchema = Schema({
   nome: {type: String, required: true},
   username: {type: String, required: true},
   senha: {type: String, required: true},
   ativo: {type: Boolean, default: true}
})

const User = models.User || model("User", UserSchema)

export default User