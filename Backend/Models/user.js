import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    },
    // role: {
    //   type: String,
    //   enum: ["admin", "employee", "client", "partner"],
    //   default: "client",
    // },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
