import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className='text-form flex flex-col'>
      <Navbar />
     {/* <Link href={`/`}>Home</Link>
     <Link href={`/signin`}>Signin</Link>
     <Link href={`/profile`}>Profile</Link> */}
    </div>
  )
}
