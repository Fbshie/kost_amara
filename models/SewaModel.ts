import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama: {type: String, required: true},
        hp: {type: Number, required: true},
        klg: {type: String, required: true},
        ktp: {type: Number, required: true},
        kamar: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const SewaModel = mongoose.models.Sewa || mongoose.model("Sewa", topicScema);

export default SewaModel;