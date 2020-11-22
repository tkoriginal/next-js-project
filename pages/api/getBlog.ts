// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import fire from '../../config/fire-config'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  const blog = await fire
  .firestore()
  .collection('blog')
  .doc(id)
  .get()
  res.json(blog.data())
}
    
