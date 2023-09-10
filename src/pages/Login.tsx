import { storedCounter } from "@/data/counter";
import Input from "@components/Input";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";

export default function Login() {
  const recoilCount = useRecoilValue(storedCounter);
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <h1>Login</h1>
      <Input />
      {recoilCount}
    </div>
  );
}
