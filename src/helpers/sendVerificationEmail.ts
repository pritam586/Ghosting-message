import {resend} from "@/lib/resend"
import VerificationEmail from "../../emails/VerificationEmail"
import { ApiResponse } from "@/types/ApiResponse"
import { promises } from "dns"
import { success } from "zod"

export async function sendVerificationEmai(
    email: string,
    username: string,
    verifyCode: string
): Promise<ApiResponse>{
    try {
    await resend.emails.send({
        from:""
    })
        return {success: true , message: ' verification email send successfully'}
    } catch (emailError) {
        console.error("Error sending verification email" , emailError)
        return {success: false , message: 'fail to send verification email'}
    }
}