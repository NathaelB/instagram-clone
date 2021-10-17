import Post from './Post'

const posts = [
  {
    id: '123',
    username: 'Sportek',
    userImg: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    img: 'https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut egestas aliquam purus, eu tristique justo condimentum id. Proin auctor nulla a ex maximus consequat. Suspendisse interdum nisl non iaculis convallis. Aliquam eget purus ac nunc lacinia efficitur a sed velit. Nunc pharetra pellentesque mauris. Praesent neque ipsum, venenatis vel est sed, ultricies iaculis leo. Duis posuere velit nec molestie consectetur. Cras arcu augue, laoreet vel pharetra sit amet, rhoncus at lectus.\n' +
      '\n' +
      'Nunc mattis fringilla nunc, ut fringilla nunc egestas et. Nullam non purus elit. Vestibulum auctor et orci in posuere. Nulla eu enim semper dolor viverra fermentum a a arcu. Donec massa est, convallis et tincidunt sit amet, egestas et nunc. Pellentesque finibus pretium arcu ac cursus. Cras nisl est, lacinia sit amet imperdiet sit amet, venenatis eu risus. Integer et nisi eros. Praesent auctor quam nec turpis convallis facilisis.'
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