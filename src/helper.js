function setUser (data)  {
  localStorage.setItem("user",JSON.stringify(data))
}
function getUser(){
    const user = JSON.parse(localStorage.getItem("user"))
    return user || null
}
export {
    setUser , getUser
}