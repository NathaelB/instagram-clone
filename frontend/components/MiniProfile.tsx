
export default function MiniProfile () {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="rounded-full border p-[2px] h-14 w-14 object-cover mr-2"
        alt=""
        src="https://cdn.discordapp.com/attachments/692761277055107172/898559403622551622/IMG_7249-min.jpeg"
      />

      <div className="flex flex-col text-sm flex-1">
        <h2>Nathael</h2>
        <h3 className="text-gray-500">𝓝𝓪𝓽𝓱𝓪𝓮𝓵</h3>
      </div>

      <button className="font-bold text-sm text-blue-400">Se déconnecter</button>

    </div>
  )
}