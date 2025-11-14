import prisma from "../prisma/client.js";

export async function fetchListings(req, res){
  const listings = await prisma.listing.findMany({});
  return res.status(200).json({
    data: listings
  })
}

export async function createListing(req, res){
  const {title, description} = req.body;
  const userCookie = req.cookies?.userCredentials;
  const idUser = userCookie.id;
  const userIdFromCookie = Number(idUser);
  const createListing = await prisma.listing.create({
    data: {
    title,
    description,
    owner: {
          connect: {
            id: userIdFromCookie
          }
        }
  }
  });
  return res.status(201).json({
    message: "Listing created"
  })

}
export async function fetchSpecificListing(req, res){
  const id = Number(req.params.id);
  const searchListing = await prisma.listing.findUnique({
    where: {
      id: id
    }
  });
  if(!searchListing){res.status(400).json({message: "Listing not found"});}
  return res.status(200).json({
    data: searchListing,
    message: "Listing found"
  })
}

export async function searchListings(req, res){
  const query = req.query.q;
  const listings = await prisma.listing.findMany({
    where : {
      title: {
        contains: query
      } 
    }
  });
  return res.status(200).json({
    data: listings
  });
}
