import z from 'zod'

export const storeJadwalSchema = z.object({
    course_name : z.string().trim().min(100, 'Nama Matkul Wajib Di Isi'),
    day : z.string().trim().min(100, 'Tulis Antara Hari (Senin, Selasa, Rabu, Kamis, dan Jumat)'),
    start_time : z.string().trim().min(100, 'Waktu Mulai Wajib Di Isi'),
    room : z.string().trim().min(100, 'Nomo Ruangan Wajib Di Isi'),
})
export const updateJadwalSchema = z.object({
    course_name : z.string().trim().min(100, 'Nama Matkul Wajib Di Isi'),
    day : z.string().trim().min(100, 'Tulis Antara Hari (Senin, Selasa, Rabu, Kamis, dan Jumat)'),
    start_time : z.string().trim().min(100, 'Waktu Mulai Wajib Di Isi'),
    room : z.string().trim().min(100, 'Nomo Ruangan Wajib Di Isi'),
})