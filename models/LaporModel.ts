import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nama_lapor: {type: String, required: true},
        kamar_lapor: {type: String, required: true},
        isi_lapor: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const LaporModel = mongoose.models.Lapor || mongoose.model("Lapor", topicScema);

export default LaporModel;