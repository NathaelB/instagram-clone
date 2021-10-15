

export default function Story ({ img, username }) {
  return (
    <div className="transition duration-150 ease-in-out hover:-translate-y-1">
      <img
        className="h-14 w-14  rounded-full p-[1.5px] object-contain border-red-500 border-2"
        src={img} alt="" />
      <p className=" text-xs w-14 mt-2 truncate text-center text-gray-700">{username}</p>
    </div>
  )
}
