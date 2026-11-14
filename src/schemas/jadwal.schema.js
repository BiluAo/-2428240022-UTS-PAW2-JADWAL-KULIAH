import { z } from 'zod';

export const storeJadwalSchema = z.object({
  course_name: z.string().trim().min(3, 'Nama Mata Kuliah Minimal 3 Karakter'),
  day: z.enum(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'], {
    errorMap: () => ({ message: 'Hari tidak valid' }),
  }),
  start_time: z.string().trim().length(5, 'Format Waktu Harus 5 Karakter (HH:MM)'),
  room: z.string().trim().min(1, 'Ruangan Wajib Diisi'),
});

export const updateJadwalSchema = z.object({
  course_name: z.string().trim().min(3, 'Nama Mata Kuliah Minimal 3 Karakter'),
  day: z.enum(['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'], {
    errorMap: () => ({ message: 'Hari tidak valid' }),
  }),
  start_time: z.string().trim().length(5, 'Format Waktu Harus 5 Karakter (HH:MM)'),
  room: z.string().trim().min(1, 'Ruangan Wajib Diisi'),
});