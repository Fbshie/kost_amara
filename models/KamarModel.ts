import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        jumlah: {type: Number, required: true},
    },
    {
        timestamps: true,
    }
);

const KamarModel = mongoose.models.Kamar || mongoose.model("Kamar", topicScema);

export default KamarModel;