import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/; HttpOnly`);
  res.status(200).send("쿠키 리셋");
}
