// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { upsertContact } from "../../services/sendgrid";

type Data = {
  success: boolean;
  error?: {
    message: string;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "PUT") {
    return res.status(400).json({
      success: false,
      error: { message: "Only PUT method is supported" },
    });
  }

  console.log(req.body);
  if (!req.body.email) {
    return res.status(400).json({
      success: false,
      error: { message: "Missing contact email address" },
    });
  }

  await upsertContact([{ email: req.body.email }]);
  res.status(200).json({ success: true });
}
