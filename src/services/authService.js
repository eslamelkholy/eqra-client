import http from "./httpService";
import { apiUrl } from "../config.json";
const apiEndPoint = apiUrl + "/api/auth";
const tokenKey = "Authorization";

http.setJwt(getJwt());

export async function login(email, password) {
  const { data } = await http.post(apiEndPoint + "/login", {
    email,
    password,
  });
  localStorage.setItem(tokenKey, "Bearer " + data.access_token);
  localStorage.setItem("role", data.role);
  return data;
}

export function loginWithJwt(jwt, role) {
  localStorage.setItem(tokenKey, jwt);
  localStorage.setItem("role", role);
}

export async function logout() {
  localStorage.removeItem(tokenKey);
  localStorage.removeItem("role");
  await http.get(apiEndPoint + "/logout");
}

export function getCurrentUser() {
  return http.get(apiEndPoint + "/user");
}

export function getJwt() {
  return localStorage.getItem(tokenKey);
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
