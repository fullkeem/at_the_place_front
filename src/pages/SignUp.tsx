import React from "react";
import { useRecoilState } from "recoil";
import {
  emailState,
  nameState,
  passwordState,
  confirmPasswordState,
} from "@/data/signUpData";

export default function SignUp() {
  const [email, setEmail] = useRecoilState(emailState);
  const [name, setName] = useRecoilState(nameState);
  const [password, setPassword] = useRecoilState(passwordState);
  const [confirmPassword, setConfirmPassword] =
    useRecoilState(confirmPasswordState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, name, password, confirmPassword);
  };

  return (
    <div className="container mt-8">
      <h2 className="w-40 mx-auto mt-8 bold f">회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userEmail">이메일: </label>
          <input
            type="text"
            id="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="userName">닉네임: </label>
          <input
            type="text"
            id="userName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button">중복 확인</button>
        </div>

        <div>
          <label htmlFor="password">비밀번호: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">비밀번호 확인: </label>
          <input
            type="password"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">가입하기</button>
      </form>
    </div>
  );
}
