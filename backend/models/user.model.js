import mongoose from "mongoose";

const schema = new mongoose.Schema({

    name: { type: String, required: true, trim: true },

    email: { type: String, required: true, trim: true, lowercase: true, unique: true },

    password: { type: String, required: true, minlength: 8, select: false },

    role: { type: String, enum: ["USER", "ADMIN"], default: "USER" }

}, { timestamps: true, versionKey: false });


export const User = mongoose.model("User", schema);

