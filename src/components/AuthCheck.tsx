"use client";

import AuthText from "@/components/AuthText";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter, useSearchParams } from "next/navigation";
import { Route } from "@/routers/types";

const AuthCheck = () => {
  const supabase = createClientComponentClient();
  const searchParams = useSearchParams();
  const router = useRouter();

  const authType: string | null = searchParams.get("type");

  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <section className={`w-full`}>
      <h1 className={`text-lg font-bold`}>
        {authType && authType.toLowerCase() === "signup"
          ? "Let's get you signed up!"
          : "Welcome Back!"}
      </h1>
      <h2>
        {authType && authType.toLowerCase() === "signup"
          ? "This will take a minute"
          : "Sign in"}
      </h2>
      <article className={`mt-8 space-y-6`}>
        <AuthText
          name={"email"}
          id={"email"}
          type={"email"}
          label={"Email Address"}
          value={formData.email}
          placeholder={"eg. bruce@wayneenterprises.com"}
          onChange={handleChange}
        />
        <button
          className={`p-3 w-full bg-primary-500 hover:bg-primary-500/90 rounded-xl text-sm text-neutral-100 uppercase font-bold transition-all duration-150`}
          onClick={async () => {
            if (formData.email.length > 0) {
              const { data } = await supabase
                .from("auth.users")
                .select()
                .eq("email", formData.email)
                .single();

              if (data) {
                router.push(("/auth/login?email=" + formData.email) as Route);
              } else {
                router.push(("/auth/signup?email=" + formData.email) as Route);
              }
            }
          }}
        >
          Continue
        </button>
      </article>
    </section>
  );
};

export default AuthCheck;
