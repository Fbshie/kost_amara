import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        nomor_kamar: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const NomorKamarModel = mongoose.models.ListKamar || mongoose.model("ListKamar", topicScema);

export default NomorKamarModel;