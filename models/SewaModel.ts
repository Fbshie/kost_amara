import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama: {type: String, required: true},
        hp: {type: String, required: true},
        keluarga: {type: String, required: true},
        durasi: {type: String, required: true},
        kamar: {type: Number, required: true},
        tanggal: {type:mongoose.Schema.Types.ObjectId, ref: "ListKamar", required: true},
    },
    {
        timestamps: true,
    }
);

const SewaModel = mongoose.models.Penyewa1 || mongoose.model("Penyewa1", topicScema);

export default SewaModel;