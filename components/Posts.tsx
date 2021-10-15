import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'nathael',
    userImg: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    img: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    caption: 'Ceci est un titre'
  },
  {
    id: '123',
    username: 'nathael',
    userImg: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    img: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    caption: 'Ceci est un titre'
  },
  {
    id: '123',
    username: 'nathael',
    userImg: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    img: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    caption: 'Ceci est un titre'
  }
]
export default function Posts () {
    return (
      <div className="mt-12 space-y-6">
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            userImg={post.userImg}
            img={post.img}
            caption={post.caption}
          />
        ))}

      </div>
    )
}