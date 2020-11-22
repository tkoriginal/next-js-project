import fire from '../../config/fire-config'
import Link from 'next/link'
const Blog = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
export const getServerSideProps = async ({ query }) => {
  let content: { title: string; content: string } = {
    title: '',
    content: ''
  }
  await fetch(`http://localhost:3000/api/getBlog?id=${query.id}`)
    .then((data) => data.json())
    .then((result) => {
      content = result
    })
  return {
    props: {
      title: content.title,
      content: content.content
    }
  }
}
export default Blog
