import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { accessToken } = req.body;
  const expirationDate = new Date();
  expirationDate.setHours(expirationDate.getHours() + 1);

  res.setHeader(
    "Set-Cookie",
    `accessToken=${accessToken}; expires=${expirationDate.toUTCString()}; Path=/; HttpOnly; Secure; SameSite=Strict`,
  );
  res.status(200).json({ accessToken });
}
