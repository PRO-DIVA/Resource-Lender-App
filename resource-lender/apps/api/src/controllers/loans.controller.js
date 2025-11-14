import prisma from "../prisma/client.js";

export async function getLoan(req, res){
  const userFromCookie = req.cookies?.userCredentials;
  const borrowerId = Number(userFromCookie.id);
  const {listingId} = req.body;
  const createLoanForUser = await prisma.loan.create({
    data: {
      listingId,
      borrowerId
    }
  });
  res.status(201).json({message: "Loan created"});
}
export async function returnLoan(req, res){
  const {listingId} = req.body;
  const userFromCookie = req.cookies?.userCredentials;
  const borrowerId = Number(userFromCookie.id);
  const returnLoanResult = await prisma.loan.deleteMany({
    where : {
      listingId,
      borrowerId
    }
  });
  if(returnLoanResult.count === 0){
    return res.status(400).json({message: "Loan not found"});
  }
  res.status(200).json({
    message: "Loan returned"
  })
}
