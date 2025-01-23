import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama: {type: String, required: true},
        hp: {type: String, required: true},
        keluarga: {type: String, required: true},
        durasi: {type: String, required: true},
        kamar: {type: Number, required: true},
        tanggal: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const SewaModel = mongoose.models.Penyewa2 || mongoose.model("Penyewa2", topicScema);

export default SewaModel;