import { Schema, model, models } from "mongoose"

const UserSchema = Schema({
   nome: {type: String, required: true},
   email: {type: String, required: true},
   senha: {type: String, required: true},
   bio: {type: String, default: ""},
   tag: {type: String, default: ""},
   dtInicio: {type: String, default: ""},
   dtFim: {type: String, default: ""},
   distancia: {type: Number, default: 0},
   valor: {type: Number, default: 0},
   ativo: {type: Boolean, default: true}
})

const User = models.User || model("User", UserSchema)

export default User