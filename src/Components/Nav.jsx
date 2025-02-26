import { Link, useLocation } from "react-router-dom"

function Nav() {
  const { pathname } = useLocation()

  const navElements = [
    { name:"Home" , link:'/'  },
    { name:"Course Management" , link:'/course'  },
    { name:"Trainers Management" , link:'/trainer'  },
    { name:"Payments" , link:'/payment'  }
  ]
  return (
    <div className="sticky top-0 start-0 w-screen border-gray-100 border-b-2 bg-amber-50">
      <nav className="flex gap-8 items-center py-4 ms-10">
        <h2 className="select-none text-2xl font-mono font-bold italic">Coursera</h2>
        <ul className="list-none flex gap-4 h-full">
          {navElements.map(l => <Link key={l.name} to={{ pathname: l.link }}><li className={`hover:bg-[#F5C4AD] duration-200 p-2 ${pathname == l.link ?'bg-[#fbded1] shadow':''}`}>{l.name}</li></Link>)}
        </ul>
        <div className="grow" />
        <Link className="hover:bg-[#F5C4AD] duration-200 p-2 me-2" to={'/login'}>Login</Link>
      </nav>
    </div>
  )
}
export default Nav