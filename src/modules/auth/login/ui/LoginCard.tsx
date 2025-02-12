"use client"

export default function LoginCard() {
  return (
    <div className="card card-compact min-w-[350px] max-w-[450px] shadow-lg">
      <div className="card-body flex flex-col justify-center items-center">
        <span className="card-title text-center text-black">เข้าสู่ระบบ</span>
        <form className="text-center my-4 px-4">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full mb-2"
          />

          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </form>
        <div className="w-full text-end">
          <a href="#" className="text-primary hover:underline">
            ลืมรหัสผ่าน ?
          </a>
        </div>
        <button className="btn btn-primary w-full">เข้าสู่ระบบ</button>
      </div>
    </div>
  )
}
