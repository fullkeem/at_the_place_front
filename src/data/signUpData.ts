import { atom } from "recoil";

export const emailState = atom({
  key: "emailState",
  default: "",
});

export const nameState = atom({
  key: "nameState",
  default: "",
});

export const passwordState = atom({
  key: "passwordState",
  default: "",
});

export const confirmPasswordState = atom({
  key: "confirmPasswordState",
  default: "",
});