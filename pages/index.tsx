import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data.json'

const LinkCard = ({ url, name, image }: {url:string, name:string, image?:string}) => {
  return (
    <a href={url}
    className="flex items-center p-1 w-full rounded-md transition-all bg-gray-100 border shadow-2xl mb-3">
      <div className="flex text-center w-full">
        <div className="w-10 h-10">
          {image && (
            <Image className='rounded-sm' alt={data.name} src={image} width={40} height={40} />
          )}
        </div>
        <h2 className="flex justify-center items-center w-full -ml-10">{name}</h2>
      </div>
    </a>
  )
}

const Home: NextPage = () => {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-8">
      <Image className='rounded-full' alt={data.name} src={data.avatar} width={130} height={130} />
      <h1 className="font-bold mt-4 mb-8">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.url} {...link} />
      ))}
    </div>
  )
}

export default Home


