import Head from 'next/head'
import { useState, useEffect } from 'react'
import Link from 'next/link'

import fire from '../config/fire-config'
import CreatePost from '../components/CreatePost'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('/api/getBlogs')
      .then((data) => data.json())
      .then((blogs) => setBlogs(blogs))
  }, [])
  console.log(blogs)
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>Blog</h1>
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Link href="/blog/[id]" as={'/blog/' + blog.id}>
            <a>{blog.title}</a>
          </Link>
        </li>
      ))}
      <CreatePost />
    </div>
  )
}
export default Home
