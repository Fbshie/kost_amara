import mongoose, {Schema } from "mongoose";


const topicScema = new Schema({
    no_ktp: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Sewa1'}],
    alamat_keluarga: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Sewa1'}],
});

const DataPribadiModel = mongoose.models.DataPribadi || mongoose.model("DataPribadi", topicScema);

export default DataPribadiModel;