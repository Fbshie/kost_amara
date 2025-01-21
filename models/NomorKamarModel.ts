import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nomor_kamar: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const NomorKamarModel = mongoose.models.NomorKamar || mongoose.model("NomorKamar", topicScema);

export default NomorKamarModel;