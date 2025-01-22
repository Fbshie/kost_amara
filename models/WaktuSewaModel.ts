import mongoose, { Schema } from "mongoose";

const topicScema = new Schema(
    {
        durasi_sewa_kamar: {type: String, required: true},
    },
    {
        timestamps: true,
    }
);

const WaktuSewaModel = mongoose.models.WaktuSewa || mongoose.model("WaktuSewa", topicScema);

export default WaktuSewaModel;