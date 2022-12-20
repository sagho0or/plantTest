import { NextApiRequest, NextApiResponse } from 'next'
let data = [
  {
    "id": 1,
    "title": "product 1",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (2).webp",
  },
  {
    "id": 2,
    "title": "product 2",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (1).webp",
  }
]
export default async (req: NextApiRequest, res: NextApiResponse<any>) => {
  const body = req.body;
  const { method } = req;
  switch (method) {
    case 'GET':
      res.setHeader('Content-Type', 'application/json')

      res.status(200).json(data)
      break
    case 'POST':
      res.setHeader('Content-Type', 'application/json')
      let postdata = {
        status: 200,
        requestBody: body
      };
      data.push(body);
      res.status(200).json(postdata)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}
