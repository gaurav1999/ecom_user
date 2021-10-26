import { Schema, model } from 'mongoose';

const UsersSchema = new Schema({
    userId: { type: String }
})

const Users = model("users", UsersSchema );

export default Users