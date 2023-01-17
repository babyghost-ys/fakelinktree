import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data.json'

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8">
      <Image className='rounded-full' alt={data.name} src={data.avatar} width={130} height={130} />
      <h1 className="font-bold mt-4">{data.name}</h1>
    </div>
  )
}

export default Home
