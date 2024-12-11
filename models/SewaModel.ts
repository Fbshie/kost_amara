import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama: {type: String, required: true},
        hp: {type: String, required: true},
        klg: {type: String, required: true},
        ktp: {type: String, required: true},
        kamar: {type: Number, required: true},
        tanggal: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const SewaModel = mongoose.models.Sewa1 || mongoose.model("Sewa1", topicScema);

export default SewaModel;