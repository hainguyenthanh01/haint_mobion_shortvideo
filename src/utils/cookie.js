import Cookies from "universal-cookie";

const cookies = new Cookies();

export const setDataCookie = (key, value, option) => {
  cookies.set(key, value, option);
};
export const removeDataCookie = (key) => {
  cookies.remove(key);
};
export const getDataCookie = (key) => {
  return cookies.get(key);
};
export function getReqPage() {
  return cookies.get("req_page");
}
