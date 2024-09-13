export const signup =(req,res)=>{
res.post("SignUpuser");
console.log("SignUpUser");
}

export const login =(req,res)=>{
res.post("LoginUser");
console.log("LoginUser");
}

export const logout =(req,res)=>{
res.post("LogOutUser");
console.log("LogoutUser");
}

