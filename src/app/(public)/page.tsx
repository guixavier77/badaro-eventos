import Header from '@/components/header'
import SearchBar from '@/components/searchBar'

export default function Home() {
  return (
    <main className="">
      <Header />

      <div className="center mt-10 flex justify-center">
        <SearchBar />
      </div>
    </main>
  )
}
