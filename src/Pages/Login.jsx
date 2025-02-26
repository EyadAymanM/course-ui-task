import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleSubmit= (e)=>{
    e.preventDefault()
    console.log(email,password);
    if(email=="admin@gmail.com" && password == "123456")
      navigate('/')
  }
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center font-mono bg-[#f6f3f0]">
      <h1 className="text-start mb-4 text-4xl">Couresera</h1>
      <div className="rounded-xl px-4 py-7 bg-white">
        <p className="mb-5 text-2xl">Sign in to Couresera</p>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-xl">E-mail</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Email:example@gmail.com" name="email" id="email" className="border px-2 py-1 min-w-60 border-gray-400 focus:outline-0 focus:border-b-black focus:border-b-3" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-xl">Password</label>
            <input onChange={(e)=>setPassword(e.target.value)} type="text" placeholder="Password" name="password" id="password" className="border px-2 py-1 min-w-96 border-gray-400 focus:outline-0 focus:border-b-black focus:border-b-3" />
          </div>
          <div className="flex flex-col gap-2 items-center mx-1">
            <input type="submit" value="Log in" className="border w-fit rounded px-4 py-2 hover:bg-black hover:rounded-none hover:text-white cursor-pointer duration-300" />
            <a href="" className="text-sm underline text-[#b99e45] hover:text-blue-600">Don&apos;t know your password?</a>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login