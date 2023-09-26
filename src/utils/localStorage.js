import { getDataCookie } from "./cookie";

export function getUser() {
  let user = JSON.parse(localStorage.getItem("user"));
  if (user && (typeof user.version == "undefined" || !getDataCookie("explg"))) {
    localStorage.removeItem("user");
  }
  return user ? user : null;
}
export function setData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
export function getData(key) {
  try {
    const data = localStorage.getItem(key);
    return data && JSON.parse(data);
  } catch (err) {
    console.error(err.message);
  }
}
export function removeData(key) {
  localStorage.removeItem(key);
}
