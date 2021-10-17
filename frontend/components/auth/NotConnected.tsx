import Link from 'next/link'

export default function NotConnected () {
  return (
    <div className="space-x-6">
      <button className="bg-blue-400 p-1 px-2 text-white font-semibold rounded-[4px]">
        <Link href="accounts/login">Se Connecter</Link>
      </button>
      <button className="text-blue-400 font-semibold">
        <Link href="accounts/register">S'inscrire</Link>
      </button>
    </div>
  )
}