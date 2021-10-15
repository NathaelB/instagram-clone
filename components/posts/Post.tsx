
export default function Post ({id, username, userImg, img, caption}) {
  return (
    <div className="border border-gray-200 bg-white">

      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4 ">
          <img
            className="h-8 w-8 object-cover rounded-full"
            src={userImg} alt=""
          />
          <span className="text-gray-900 font-semibold">{username}</span>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </div>



      <div>
        <img
          className="w-[766px] h-auto"
          src={img}
        />

      </div>
      <div className="flex justify-between p-4">
        <div className="flex space-x-4">
          {/* like */}
          <svg xmlns="http://www.w3.org/2000/svg" className="postBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>

          {/* comment */}
          <svg xmlns="http://www.w3.org/2000/svg" className="postBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>

          {/* partage */}
          <svg xmlns="http://www.w3.org/2000/svg" className="postBtn rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>

        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className="postBtn" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
      </div>

      <div>
        <p className="p-5 truncate">
          <span className="font-bold mr-2">{username}</span>
          {caption}
        </p>
      </div>

      {/* input box */}
      <form className="flex items-center p-4 border-t">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <input
          placeholder="Ajouter un commentaire..."
          className="border-none flex-1 focus:ring-0 outline-none"
          type='text'/>
        <button className="font-semibold text-blue-400">Publier</button>
      </form>

    </div>
  )
}