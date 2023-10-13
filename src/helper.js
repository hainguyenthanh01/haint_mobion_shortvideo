function setUser (data)  {
  localStorage.setItem("userInfo",JSON.stringify(data))
}
function getUser(){
    const user = JSON.parse(localStorage.getItem("userInfo"))
    return user || null
}
function removeData(key) {
  localStorage.removeItem(key);
}
function removeUser() {
  localStorage.removeItem("userInfo")
}
export {
    setUser , getUser , removeData,removeUser
}
