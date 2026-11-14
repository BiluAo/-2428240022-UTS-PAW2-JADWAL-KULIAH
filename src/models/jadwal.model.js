import mongoose from 'mongoose';

const schema = new mongoose.Schema(
  {
    course_name: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
      enum: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
    },
    start_time: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const JadwalModel = mongoose.model('jadwal', schema);
export default JadwalModel;