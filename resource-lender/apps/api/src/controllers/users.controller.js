import prisma from "../prisma/client.js";

export async function fetchUsers(req, res){
  const users = await prisma.user.findMany({});
  return res.status(200).json({
    data: users
  })
}

export async function fetchSpecificUser(req, res){
  const id = Number(req.params.id);
  const searchUser = await prisma.user.findUnique({
    where: {
      id: id
    }
  });
  if(!searchUser){res.status(400).json({message: "User not found"});}
  return res.status(200).json({
    data: searchUser,
    message: "User found"
  })
}
