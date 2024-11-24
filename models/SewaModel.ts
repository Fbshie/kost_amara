import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama: {type: String, required: true},
        hp: {type: String, required: true},
        klg: {type: String, required: true},
        ktp: {type: String, required: true},
        kamar: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const SewaModel = mongoose.models.Sewa11 || mongoose.model("Sewa11", topicScema);

export default SewaModel;