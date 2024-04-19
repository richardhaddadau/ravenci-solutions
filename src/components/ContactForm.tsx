"use client";

import AuthText from "@/components/AuthText";
import { useState } from "react";
import AuthTextArea from "@/components/AuthTextArea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    website: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className={`p-10 w-full max-w-3xl`}>
      <form className={`grid grid-cols-2 gap-4 w-full text-neutral-200`}>
        <AuthText
          id={`name`}
          name={"name"}
          label={"Your name"}
          type={"text"}
          placeholder={""}
          value={formData.name}
          required={true}
          onChange={handleChange}
        />

        <AuthText
          id={`company`}
          name={"company"}
          label={"Company"}
          type={"text"}
          placeholder={""}
          value={formData.company}
          onChange={handleChange}
        />

        <AuthText
          id={`email`}
          name={"email"}
          label={"Your email address"}
          type={"email"}
          placeholder={""}
          value={formData.email}
          required={true}
          onChange={handleChange}
        />

        <AuthText
          id={`website`}
          name={"website"}
          label={"Website (if applicable)"}
          type={"text"}
          placeholder={""}
          value={formData.email}
          onChange={handleChange}
        />

        <AuthTextArea
          id={`message`}
          name={"message"}
          label={"Message"}
          placeholder={""}
          value={formData.message}
          onChange={(event) =>
            setFormData({ ...formData, message: event.target.value })
          }
          required={true}
        />

        <button
          className={`mt-5 pt-3 pb-2 w-full bg-ravenci-primary hover:shadow-xl hover:shadow-ravenci-primary/40 text-sm font-poppins text-white uppercase transition-all duration-200`}
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
