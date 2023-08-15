import HelloEmail from "@/component/email";
import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST() {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        },
    });
    const emailHtml = render(HelloEmail());
    const options = {
        from: process.env.EMAIL,
        to: process.env.RECIPIENT,
        subject: "hello world tester",
        html: emailHtml,
    };

    await transporter.sendMail(options);

    return NextResponse.json({ message: "Success" }, { status: 200 });
}
