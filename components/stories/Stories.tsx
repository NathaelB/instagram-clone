import { useEffect, useState } from 'react'
import faker from 'faker'
import Story from './Story'

function Stories () {

  type Card = {
    adress: object,
    avatar: string
    company: object
    dob: object
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
  }
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {
    const suggestions: Card[] = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
    }))
    setSuggestions(suggestions as Card[])
  }, [])
  return (
    <div className="flex space-x-2 p-6 mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin-black">
      {suggestions.map((item) => (
        <Story
          key={item.id}
          img={item.avatar}
          username={item.username}
        />
      ))}

    </div>
  )
}

export default Stories