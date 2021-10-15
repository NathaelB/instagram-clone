import Head from 'next/head'
import Header from '../components/Header'
import Feed from '../components/Feed'

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-gray-50 h-screen scrollbar-hide overflow-y-scroll">

      <Header />
      <Feed />
    </div>
  )
}
