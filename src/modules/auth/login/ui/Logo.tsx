import Image from "next/image"

export default function LogoComponent() {
  return (
    <div className="md:flex flex-col justify-center items-center h-screen bg-white hidden md:col-span-8">
      <Image src="/images/logo/3PN.png" alt="logo" width={500} height={500} />
    </div>
  )
}
