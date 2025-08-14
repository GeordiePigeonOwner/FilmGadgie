'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface Me {
  hometown?: string
}

export default function Home() {
  const [me, setMe] = useState<Me | null>(null)

  useEffect(() => {
    fetch('/api/Me')
      .then(res => (res.ok ? res.json() : null))
      .then(setMe)
      .catch(() => setMe(null))
  }, [])

  return (
    <div>
      <nav className="bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <div className="hidden sm:block w-1/3">
              <ul className="flex space-x-4">
                <li><a href="https://www.youtube.com/channel/UCpgYQfeCc88p7vESb8nM3dQ" className="social youtube">YouTube</a></li>
                <li><a href="https://twitter.com/FilmGadgie" className="social twitter">Twitter</a></li>
              </ul>
            </div>
            <div className="w-full sm:w-1/3 text-center">
              <Link href="/" className="brand block py-4"> FilmGadgie <br /> Film Maker</Link>
            </div>
            <div className="hidden sm:block w-1/3 text-right">
              <a href="email:Dad@LukeAndDad.co.uk">Dad@LukeAndDad.co.uk</a>
            </div>
          </div>
        </div>
      </nav>
      <header></header>
      <div className="videos">
        <div className="container video-preview">
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {[1,2,3,4,5,6,7,8].map(i => (
              <div key={i} className="relative cursor-pointer">
                <Image src={`https://via.placeholder.com/300x200?text=Video+${i}`} alt={`video-preview-${i}`} width={300} height={200} className="thumbnail-video" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {me && (
        <pre className="p-4">{JSON.stringify(me)}</pre>
      )}
    </div>
  )
}
