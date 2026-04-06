import {z} from 'zod';

export const MessageSchema = z.object({
   content : z
   .string()
   .min(10 ,{message : 'content must be alteast must be 10 character'})
   .max(300 , {message : 'content must be almost must be 300 character'})
})