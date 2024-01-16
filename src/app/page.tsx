'use client'
import CardEvent from '@/components/cardEvent'
import SearchBar from '@/components/searchBar'


export default function Home() {

  return (
    <main className="flex h-screen justify-center bg-[#f1f1f1dd]">
      <div className="center">
        <div className="mt-[60px] flex flex-col items-center justify-center">
          <SearchBar />
          <CardEvent />

        </div>
      </div>
    </main>
  )
}
