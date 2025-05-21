"use client";

import Image from "next/image";
import { redirect } from "next/navigation";
import { SyncLoader } from "react-spinners";
import { useEffect, useState } from "react";
import AlmaImg from "@/images/alma.png";
import { setIsLoggedIn } from "@/redux/adminSlice/adminSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectIsLoggedIn } from "@/redux/adminSlice/selectors";
import { FormErrorType } from "../LeadForm/types";
import { InputDefaultCN, InputErrorCN } from "../LeadForm/leadFormStyles";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrorType>({});

  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    setErrors({});
  }, [loginData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!loginData.username) newErrors.username = "Username is required";
    if (!loginData.password) newErrors.password = "Password is required";
    return newErrors;
  };

  const login = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        dispatch(setIsLoggedIn(true));
      } else {
        setErrors({ password: "Invalid username or password" });
      }
    } catch {
      alert("Failed to login. Please try again.");
    }

    setSubmitting(false);
  };

  if (isLoggedIn) {
    redirect("/admin/dashboard");
  }

  return (
    <div className="h-[100dvh] flex flex-col justify-center items-center">
      <div className="max-w-[400px] w-[90%]">
        <div className="bg-[#D9DEA5] py-2 px-4 flex justify-center">
          <Image src={AlmaImg} alt="Alma" height={14} />
        </div>
        <p className="text-center py-2">Admin Login</p>
        <form onSubmit={login}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={loginData.username}
            onChange={handleChange}
            className={InputDefaultCN}
          />
          {errors.username && <p className={InputErrorCN}>{errors.username}</p>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="off"
            value={loginData.password}
            onChange={handleChange}
            className={InputDefaultCN}
          />
          {errors.password && <p className={InputErrorCN}>{errors.password}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="rounded bg-[#1D1D1D] text-white w-full text-xs h-[44px] cursor-pointer hover:bg-black"
          >
            {submitting ? <SyncLoader size={10} color="white" /> : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
