import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        min: 1,
    },
    isActive: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model("Student", studentSchema);
