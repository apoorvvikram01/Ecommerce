import React from "react";
import { NavLink, Link } from "react-router-dom";
import { GiShoppingBag } from "react-icons/gi";
import { useAuth } from "../../context/Auth";
import { Toast } from "react-hot-toast";

function Header() {
  const [auth,setAuth] = useAuth()
  const handleLogout= () =>{
    setAuth({
      ...auth, user: null,token : ''
    })
    localStorage.removeItem('auth');
    toast.success('Logged out successfully')
  }
  return (
    <>
      <nav className="block w-full max-w-screen-xl px-6 py-3 mx-auto text-white bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 uppercase font-semibold ">
        <div className="flex items-center justify-between text-blue-gray-900 ">
       <div className="space-between w-auto inline-block  justify-start flex-row">
        <GiShoppingBag className="inline-block mr-1"/> 
        <Link
            className="flex-wrap inline-block "   
          > 

            Ecommerce App
          </Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
             
                <NavLink
                  to= {'/'} 
                  className={({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
              }
                  // className= "flex items-center transition-colors hover:text-blue-500  "
             >
                  Home
                </NavLink>
              </li>
             
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <NavLink
                  to={"/categories"}
                 
                  className= {({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
            }
                >
                  Categories
                </NavLink>
              </li>
             
            {
              !auth.user? (
                <>
                 <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <NavLink
                  to={"/register"}
                  className= {({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
            }
                >
                  Register
                </NavLink>
              </li>
              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <NavLink
                  to={"/login"}
                 
                  className= {({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
            }
                >
                  Login
                </NavLink>
              </li>
                </>
              ) : (
                <>
                  <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <NavLink
                  to={"/login"} onClick={handleLogout}
                 
                  className= {({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
            }
                >
                  Logout
                </NavLink>
              </li>
                </>
              )
            }

              <li className="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900">
                <NavLink
                  to={"/cart"}
                 
                  className= {({isActive}) =>
                  `block py-2 pr-4 pl-3 duration-200 ${isActive? 'text-orange-700 border-b-4':'text-gray-700'}  flex items-center transition-colors hover:text-blue-500 `
            }
                >
                  Cart(0)
                </NavLink>
              </li>
            </ul>
          </div>

          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
          >
            <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6"
              >
                <path
                
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}

export default Header;
