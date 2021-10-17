import { useEffect, useState } from 'react'
import faker from 'faker'
export default function Suggestions () {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_,i) => ({
      ...faker.helpers.contextualCard(),
      id: i
    }))
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm text-gray-400">Suggestions pour toi</h3>
        <button className="text-gray-700 font-semibold">Voir Tout</button>
      </div>
      <div>
        {suggestions.map(item => (
          <div key={item.id} className="flex items-center justify-between mt-3">
            <img src={item.avatar} className="w-10 h-10 object-cover rounded-full shadow-sm"/>
            <div className="flex-1 ml-4">
              <h2 className="font-semibold text-sm ">{item.username}</h2>
              <h3 className="text-gray-500 w-[200px] truncate">Works at {item.company.name}</h3>
            </div>
            <button className="text-blue-400 font-semibold">Suivre</button>
          </div>
        ))}
      </div>

    </div>
  )
}