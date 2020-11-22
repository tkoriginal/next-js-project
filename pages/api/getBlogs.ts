// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import fire from '../../config/fire-config'

export default (_: NextApiRequest, res: NextApiResponse) => 
  new Promise(resolve => {
    fire
      .firestore()
      .collection('blog')
      .onSnapshot((snap) => {
        const blogs =  snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        res.json(blogs)
        return resolve()
      })
  })
