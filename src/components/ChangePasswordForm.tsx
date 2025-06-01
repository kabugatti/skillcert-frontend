"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function ChangePasswordForm() {
    const [formValues, setFormValues] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormValues((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        alert("Form Submitted Successfully")
    }


    return (
        <div className="w-full flex flex-col items-center justify-start gap-4 md:gap-8">
            <h1 className=" text-2xl md:text-5xl font-medium text-[#9333EA]">Password</h1>
            <hr className="bg-[#9333EA] w-full h-[1px] border-[#9333EA]" />

            <form
                onSubmit={handleSubmit}
                className="w-full max-w-[485px] flex flex-col items-center gap-5 md:gap-10 mt-5 "
            >
                <label
                    htmlFor="currentPassword"
                    className="flex flex-col items-center gap-5 w-full"
                >
                    <span className="text-[#9333EA] font-medium text-xl md:text-[32px]">
                        Enter current password
                    </span>
                    <Input
                        id="currentPassword"
                        type="text"
                        value={formValues.currentPassword}
                        name="currentPassword"
                        placeholder="Current password"
                        onChange={handleChange}
                        className="w-full border-[1px] border-[#9333EA] rounded-[40px] py-7 px-[30px] bg-[#1F2937] text-base text-[#FFFFFF] font-normal"
                    />
                </label>

                <label
                    htmlFor="newPassword"
                    className="flex flex-col items-center gap-5 w-full"
                >
                    <span className="text-[#9333EA] font-medium text-xl md:text-[32px]">
                        Enter new password
                    </span>
                    <Input
                        id="newPassword"
                        type="text"
                        value={formValues.newPassword}
                        name="newPassword"
                        placeholder="New password"
                        onChange={handleChange}
                        className="w-full border-[1px] border-[#9333EA] rounded-[40px] py-7 px-[30px] bg-[#1F2937] text-base text-[#FFFFFF] font-normal"
                    />
                </label>

                <label
                    htmlFor="confirmNewPassword"
                    className="flex flex-col items-center gap-5 w-full"
                >
                    <span className="text-[#9333EA] font-medium text-xl md:text-[32px]">
                        Re-type new password
                    </span>
                    <Input
                        id="confirmNewPassword"
                        type="text"
                        value={formValues.confirmNewPassword}
                        name="confirmNewPassword"
                        placeholder="Confirm new password"
                        onChange={handleChange}
                        className="w-full border-[1px] border-[#9333EA] rounded-[40px] py-7 px-[30px] bg-[#1F2937] text-base text-[#FFFFFF] font-normal"
                    />
                </label>

                <Button
                    type="submit"
                    variant="secondary"
                    className="ml-auto bg-[#9333EA] w-full max-w-[200px] text-center rounded-[25px] text-white text-base font-normal py-6 px-2"
                >
                    Change
                </Button>
            </form>
        </div>
    );
}
