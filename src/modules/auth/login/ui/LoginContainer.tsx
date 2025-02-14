"use client"

import TextInput from "@/src/components/TextInput"

export default function LoginCard() {
  return (
    <div className="bg-primary h-screen flex flex-col justify-center items-center md:col-span-4 col-span-12">
      <div className="card bg-secondary min-w-[340px] max-w-[500] shadow-xl">
        <div className="card-body text-center flex justify-center">
          <div className="text-center flex justify-center card-title text-primary text-xl">
            เข้าสู่ระบบ
          </div>
          <form>
            <TextInput
              label="ชื่อผู้ใช้งาน"
              name="username"
              className="mb-2"
              required={true}
            />
            <TextInput
              label="รหัสผ่าน"
              name="password"
              type="password"
              required={true}
            />
          </form>
          <div className="w-full text-end">
            <a href="#" className="text-sm text-primary hover:underline">
              ลืมรหัสผ่าน ?
            </a>
          </div>
          <button className="btn bg-[#0E65DA] hover:bg-secondary hover:border-primary hover:text-primary border-transparent w-full text-secondary">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
    </div>
  )
}
