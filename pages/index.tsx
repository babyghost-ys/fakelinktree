import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data.json'

const Home: NextPage = () => {
  return (
    <div className="flex items-center">
      <Image alt={data.name} src={data.avatar} width={130} height={130} />
    </div>
  )
}

export default Home
