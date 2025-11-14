import prisma from "../prisma/client.js";

export async function signup(req, res){
  const {name, email, password} = req.body;
  
  const findUser = await prisma.user.findUnique({
    where : {
      email
    }
  });

  if(findUser){
    return res.status(400).json({message: "Email taken"});
  }

  const newUser = await prisma.user.create({
    data:{name, email, password}
  });

  return res.status(201).json({data: newUser, message: "User created"});

}

export async function login(req, res){
  const {email, password} = req.body;

  const findUser = await prisma.user.findUnique({
    where : {
      email,
      password
    }
  });

  if(!findUser){
    return res.status(400).json({message: "User not found"});
  }
  const name = findUser.name;
  const id = findUser.id;
  const cookieObj = {id, name, email, password};
  res.cookie('userCredentials', cookieObj);
  return res.status(200).json({data: findUser, message: "Logged in"});
}

export async function logout(req, res){
  res.clearCookie('userCredentials');
  return res.status(200).json({message: "Logged out"});
}
