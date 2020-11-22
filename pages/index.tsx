import Head from 'next/head'
import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'

import fire from '../config/fire-config'
import CreatePost from '../components/CreatePost'

const Home = ({ blogs }) => {
  const [reFetchedBlogs, setReFetchedBlogs] = useState(blogs || [])
  useEffect(() => {
    fetch('/api/getBlogs')
      .then((data) => data.json())
      .then((blogs) => setReFetchedBlogs(blogs))
  }, [blogs])
  return (
    <div>
      <Head>
        <title>Blog App</title>
      </Head>
      <h1>Blog</h1>
      {reFetchedBlogs.map((blog) => (
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

export const getServerSideProps: GetServerSideProps = async () => {
  const blogs = await fetch('http://localhost:3000/api/getBlogs')
    .then((data) => data.json())
    .then((blogs) => blogs)
  return {
    props: { blogs }
  }
}
export default Home
