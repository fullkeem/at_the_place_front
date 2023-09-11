import React from "react";

export default function SignUp() {
  return (
    <div className="container">
      <h2 className="mt-1">회원가입</h2>
      <div>
        <label htmlFor="userEmail">이메일: </label>
        <input
          type="text"
          id="userEmail"
          name="userEmail"
          placeholder="이메일"
        />
      </div>
      <div>
        <label htmlFor="userName">아이디: </label>
        <input type="text" id="userName" name="userName" placeholder="아이디" />
      </div>
      <div>
        <label htmlFor="password">비밀번호: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="비밀번호"
        />
      </div>
    </div>
  );
}
