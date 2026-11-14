import JadwalModel from '../models/jadwal.model.js'
import { storeJadwalSchema, updateJadwalSchema } from '../schemas/jadwal.schema.js'
import { apiResponse } from '../utils/response.js'
import { AppError } from '../errors/app-error.js'

class JadwalController {
    static async index(req, res, next) {
        try {
            const { search, sortBy, order } = req.query

            let filter = {}
            let sortOption = {}

            if (search) {
                filter.$or = [
                    { course_name: { $regex: search, $options: 'i' } },
                    { room: { $regex: search, $options: 'i' } }
                ]
            }

            if (sortBy) {
                sortOption[sortBy] = order === 'desc' ? -1 : 1
            }

            const listJadwal = await JadwalModel.find(filter).sort(sortOption)

            return apiResponse({
                res,
                status: 200,
                message: 'Daftar Jadwal Kuliah',
                data: listJadwal
            })
        } catch (error) {
            next(error)
        }
    }

    static async show(req, res, next) {
        try {
            const jadwal = await JadwalModel.findById(req.params.id)

            if (!jadwal) throw new AppError('Jadwal kuliah tidak ditemukan', 404)

            return apiResponse({
                res,
                status: 200,
                message: 'Detail Jadwal Kuliah',
                data: jadwal
            })
        } catch (error) {
            next(error)
        }
    }

    static async store(req, res, next) {
        try {
            const validatedData = storeJadwalSchema.parse(req.body)

            const jadwal = await JadwalModel.create(validatedData)

            return apiResponse({
                res,
                status: 201,
                message: 'Jadwal kuliah berhasil ditambahkan',
                data: jadwal
            })
        } catch (error) {
            next(error)
        }
    }

    static async update(req, res, next) {
        try {
            const validatedData = updateJadwalSchema.parse(req.body)

            const jadwal = await JadwalModel.findByIdAndUpdate(
                req.params.id,
                validatedData,
                { new: true, runValidators: true }
            )

            if (!jadwal) throw new AppError('Jadwal kuliah tidak ditemukan', 404)

            return apiResponse({
                res,
                status: 200,
                message: 'Jadwal kuliah berhasil diperbarui',
                data: jadwal
            })
        } catch (error) {
            next(error)
        }
    }

    static async delete(req, res, next) {
        try {
            const jadwal = await JadwalModel.findByIdAndDelete(req.params.id)

            if (!jadwal) throw new AppError('Jadwal kuliah tidak ditemukan', 404)

            return apiResponse({
                res,
                status: 200,
                message: 'Jadwal kuliah berhasil dihapus',
                data: null
            })
        } catch (error) {
            next(error)
        }
    }
}

export default JadwalController