import { NextApiRequest, NextApiResponse } from 'next'

let data = [
  {
    "id": 1,
    "title": "product 1",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (2).webp",
    "date": new Date(),
    "isFave": false
  },
  {
    "id": 2,
    "title": "product 2",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (1).webp",
    "date": new Date(),
    "isFave": false
  },
  {
    "id": 3,
    "title": "product 3",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (2).webp",
    "date": new Date(),
    "isFave": false
  },
  {
    "id": 4,
    "title": "product 4",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl.webp",
    "date": new Date(),
    "isFave": false
  },
  {
    "id": 5,
    "title": "product 5",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (2).webp",
    "date": new Date(),
    "isFave": false
  },
  {
    "id": 6,
    "title": "product 6",
    "summary": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    "imageUrl": "/images/dynamic/products/pl (1).webp",
    "date": new Date(),
    "isFave": false
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
      
      data[data.findIndex(el => el.id === req.body.idSelected)].isFave = !data[data.findIndex(el => el.id === req.body.idSelected)].isFave;
      res.status(200).json(postdata)
      break
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }

}
