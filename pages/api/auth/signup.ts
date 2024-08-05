import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password, name } = req.body;

    try {
      const newUser = await prisma.user.create({
        data: {
          email,
          password,
          name,
        },
      });
      res.status(200).json({ message: "User created", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Error creating user", error });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
