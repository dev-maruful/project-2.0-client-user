"use client";

import { useFormik } from "formik";
import { Button, Label, TextInput } from "keep-react";
import { object, string, number, date, InferType } from "yup";
import { Envelope, Lock, EyeSlash, Phone } from "phosphor-react";

export default function Page() {
  const validationSchema = object({
    first_name: string().required(),
    last_name: number().required().positive().integer(),
    email: string().email(),
    password: string().url().nullable(),
    // confirm_password: string().oneOf("password").required(),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirm_password: "",
      phone: "",
      refer_id: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-3xl p-5 mx-auto space-y-5 bg-white rounded-md"
    >
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Label value="First Name" className="text-xs" />
          <TextInput id="first_name" placeholder="First Name" color="gray" />
        </div>

        <div>
          <Label value="Last Name" className="text-xs" />
          <TextInput
            id="last_name"
            name="last_name"
            placeholder="Last Name"
            color="gray"
            value={formik.values.last_name}
          />
        </div>

        <div>
          <Label value="E-mail Address" className="text-xs" />
          <TextInput
            id="email"
            placeholder="example@gmail.com"
            color="gray"
            sizing="md"
            addon={<Envelope size={20} color="#5E718D" />}
            addonPosition="left"
          />
        </div>

        <div>
          <Label value="Phone Number" className="text-xs" />
          <TextInput
            id="email"
            placeholder="01*********"
            color="gray"
            sizing="md"
            addon={<Phone size={20} color="#5E718D" />}
            addonPosition="left"
          />
        </div>

        <div>
          <Label value="Password" className="text-xs" />
          <TextInput
            id="#id-10"
            placeholder="Password"
            color="gray"
            sizing="md"
            type="password"
            addon={<Lock size={20} color="#5E718D" />}
            addonPosition="left"
          />
        </div>

        <div>
          <Label value="Confirm Password" className="text-xs" />
          <TextInput
            id="#id-10"
            placeholder="Confirm Password"
            color="gray"
            sizing="md"
            type="confirm_password"
            addon={<Lock size={20} color="#5E718D" />}
            addonPosition="left"
          />
        </div>
      </div>

      <div>
        <Label value="Referral ID" className="text-xs" />
        <TextInput id="refer_id" placeholder="Referral ID" color="gray" />
      </div>

      <button type="submit" className="p-2 rounded-md bg-sky-400">
        Submit
      </button>
    </form>
  );
}
