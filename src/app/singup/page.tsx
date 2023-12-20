"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
export default function SingupPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });
  const onSingup = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Singup</h1>
      <hr />
      <label htmlFor="username">username</label>
      <input
        className="border border-gray-400 p-2 rounded-md focus:outline-none  focus:border-gray-600"
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
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
        onClick={onSingup}
      >
        Singup
      </button>
      <Link href="/login">Visit login page</Link>
    </div>
  );
}
