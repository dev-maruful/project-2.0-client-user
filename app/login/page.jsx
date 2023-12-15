"use client";

import { Button, Label, TextInput } from "keep-react";
import Link from "next/link";
import { Envelope, Lock } from "phosphor-react";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { object, string } from "yup";
import { useFormik } from "formik";
import FormikErrorBox from "@/components/FormikErrorBox";

export default function Page() {
  const [showPass, setShowPass] = useState(false);

  const validationSchema = object({
    email_or_phone: string().required("Please enter email or phone number"),
    password: string().min(8).required("Please enter password"),
  });

  const initialValues = {
    email_or_phone: "",
    password: "",
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.errors);

  return (
    <div className="flex items-center justify-center">
      <div className="p-8 bg-white rounded-2xl w-[514px]">
        <div className="flex flex-col items-center space-y-2 text-[#1F2937] mb-10">
          <h1 className="text-2xl font-semibold">Welcome Back!</h1>
          <p>Login to your account</p>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="mb-2 space-y-4">
            <div className="space-y-1">
              <Label value="Email or Phone Number" className="text-sm" />
              <TextInput
                id="email_or_phone"
                name="email_or_phone"
                value={formik.values.email_or_phone}
                handleOnChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter email or phone number"
                color="gray"
              />
              <FormikErrorBox formik={formik} field="email_or_phone" />
            </div>

            <div>
              <div className="relative space-y-1">
                <Label value="Password" className="text-sm" />
                <TextInput
                  id="password"
                  name="password"
                  value={formik.values.password}
                  handleOnChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Minimum 8 characters"
                  color="gray"
                  type={showPass ? "text" : "password"}
                />
                <div
                  className="absolute cursor-pointer top-1/2 right-2"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? (
                    <VscEyeClosed className="text-[#5D5FEF]" size={20} />
                  ) : (
                    <VscEye className="text-[#5D5FEF]" size={20} />
                  )}
                </div>
              </div>
              <FormikErrorBox formik={formik} field="password" />
            </div>
          </div>

          <div className="text-[#5D5FEF] font-medium flex justify-end">
            <Link href="">Forgot Password?</Link>
          </div>

          <Button
            size="md"
            type="primary"
            className="w-full mt-6 font-semibold text-white rounded-md"
          >
            Login
          </Button>
        </form>

        <div className="flex justify-center gap-1 mt-4">
          <span className="text-[#1F2937]">Don&apos;t have an account?</span>
          <Link href="/register" className="text-[#5D5FEF]">
            Create Account
          </Link>
        </div>

        <div class="mt-8 mb-5 flex items-center">
          <div class="flex-grow border-t border-[#D1D5DB]"></div>
          <span class="flex-shrink mx-4 text-[#4B5563] text-sm">Or</span>
          <div class="flex-grow border-t border-[#D1D5DB]"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <Button
              type="outlineGray"
              size="xs"
              className="hover:bg-primary-25"
            >
              <FcGoogle size={20} />
            </Button>
            <Button
              type="outlineGray"
              size="xs"
              className="hover:bg-primary-25"
            >
              <FaFacebook size={20} className="text-[#1877F2]" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
