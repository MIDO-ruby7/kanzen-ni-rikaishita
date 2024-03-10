import type { Post } from '../../models/post'

const List = (props: { post: Post }) => (
  <li>
    <a href={`/post/${props.post.id}`}>{props.post.title}</a>
  </li>
)

export const Index = (props: { posts: Post[] }) => {
  return (
    <main>
      <h2>Posts</h2>
      <ul>
        {props.posts.map((post) => (
          <List post={post} />
        ))}
      </ul>
    </main>
  )
}