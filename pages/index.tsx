import type { NextPage } from 'next'
import Image from 'next/image'
import data from '../data.json'

const FacebookIcon = ({url}:{url:string}) => {
  return (
    <>
    <a href={url}>
    <svg width={35} height={35} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#ffffff" d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"></path></g></svg></a>
    </>
  )
}

const LinkedInIcon = ({url}:{url:string}) => {
  return (
    <>
    <a href={url}>
    <svg width={35} height={35} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M3 1a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2H3zm1.102 4.297a1.195 1.195 0 100-2.39 1.195 1.195 0 000 2.39zm1 7.516V6.234h-2v6.579h2zM6.43 6.234h2v.881c.295-.462.943-1.084 2.148-1.084 1.438 0 2.219.953 2.219 2.766 0 .087.008.484.008.484v3.531h-2v-3.53c0-.485-.102-1.438-1.18-1.438-1.079 0-1.17 1.198-1.195 1.982v2.986h-2V6.234z" fill="#ffffff"></path> </g></svg>
    </a>
    </>
  )
}


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
      <div className="flex items-center gap-4 mt-8">
        {data.socials.map((social) => {
          if (social.name === 'facebook') {
            return <FacebookIcon key={social.url} {...social} />
          }
          if (social.name === 'linkedin') {
            return <LinkedInIcon key={social.url} {...social} />
          }
        })}
      </div>
    </div>
  )
}

export default Home


