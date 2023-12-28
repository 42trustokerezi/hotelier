import Categories from '@/components/categories/categories'
import Search from '@/components/search/search'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden flex-col bg-[#0D1016] items-center justify-between px-8 pt-36">
      <h1 className='text-white font-normal text-4xl md:text-6xl'>Find the best getaways for you.</h1>
      <div className='w-[100%] mx-auto mt-12'>
        <Search/>
        <Categories/>
      </div>
    </main>
  )
}
