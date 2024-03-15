import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const accessToken = req.cookies.accessToken;
  res.status(200).json({ accessToken });
}
