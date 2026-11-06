import mongoose from 'mongoose'

const JadwalSchema =  new mongoose.Schema(
    {
        course_name:{
            type:String,
            require: true,
            unique: true,
        },
        day:{
            type:String,
            require:true,
            unique:true,
        },
        start_time:{
            type:String,
            require:true,
            unique:true,
        },
        room:{
            type:String,
            require:true,
            unique:true,
        },
    },
    {
        timestamps: true,
    }
)
const JadwalModel = mongoose.model('jadwal',JadwalSchema)
export default JadwalSchema