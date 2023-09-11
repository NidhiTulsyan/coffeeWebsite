import mongoose from "mongoose";
const objectId = mongoose.Schema.Types.ObjectId;

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    addProducts: [
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Product" 
            
        }
    ],
  },
  {
    timestamps: true,
  }
);

const Admin = mongoose.model("Admin", adminSchema);
export default Admin;
