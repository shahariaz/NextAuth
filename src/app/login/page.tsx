"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function LoginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login</h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className="border border-gray-400 p-2 rounded-md focus:outline-none  focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="border border-gray-400 p-2 rounded-md focus:outline-none  focus:border-gray-600 mb-2"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        className="border border-gray-400 p-2 rounded-md focus:outline-none  focus:border-gray-600"
        onClick={onLogin}
      >
        Login
      </button>
      <Link href="/singup">Visit Singup page</Link>
    </div>
  );
}
