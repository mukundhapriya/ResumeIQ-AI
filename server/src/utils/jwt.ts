import jwt from "jsonwebtoken";

export const generateAccessToken = (
  userId: string,
  email: string
) => {
  return jwt.sign(
    { userId, email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
};