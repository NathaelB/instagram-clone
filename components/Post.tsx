

export default function Post ({id, username, userImg, img, caption}) {
  return (
    <div className="border border-gray-200 bg-white">
      <div className="flex items-center space-x-4 p-4">
        <img
          className="h-8 w-8 object-cover rounded-full"
          src={userImg} alt=""
        />
        <span className="text-gray-900 font-semibold">{username}</span>
      </div>
      <div>
        <img
          className="w-[766px] h-auto"
          src={img}
        />

      </div>

    </div>
  )
}