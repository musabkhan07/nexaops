import { z } from 'zod';
export const leadSchema = z.object({name:z.string().min(2),email:z.string().email(),phone:z.string().optional(),company:z.string().optional(),website:z.string().optional(),service:z.string().min(2),infrastructure:z.string().optional(),description:z.string().min(10),budget:z.string().optional(),contactMethod:z.string().optional()});
export const consultationSchema = z.object({name:z.string().min(2),email:z.string().email(),phone:z.string().optional(),service:z.string().min(2),date:z.string().min(8),time:z.string().min(3),notes:z.string().optional()});
export const contactSchema = z.object({name:z.string().min(2),email:z.string().email(),subject:z.string().optional(),message:z.string().min(5)});
