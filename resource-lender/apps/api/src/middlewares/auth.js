export default function requireAuth(req, res, next){
  if(req.cookies.userCredentials)
    next()
  else {
    return res.status(401).json({message: "Please login"});
  }
}
