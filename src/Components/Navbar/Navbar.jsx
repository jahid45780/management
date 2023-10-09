import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";
import Swal from "sweetalert2";






const Navbar = () => {
    const [User, setUser] = useState(null)
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                console.log(user)
                setUser(user)

            })
            .catch(error => {
                console.error(error.message)
            })
    }

    const { user, logOut } = useContext(AuthContext)
    const handleSingOut = () => {
        logOut()
            .then(result => {
                console.log(result)
                Swal.fire('LogOut Successfully')
            })
            .catch()
    }

    const links = <>

        <li>

            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" >Home</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/about"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > About Us</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" >Blog</span>
            </NavLink>

        </li>



        <li>

            <NavLink
                to="/service"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > Service Price </span>
            </NavLink>

        </li>


        <li>

            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" > Contact Us </span>
            </NavLink>

        </li>


        <li>

            <NavLink
                to="/login"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-red-600 underline" : ""
                }
            >
                <span className=" text-2xl" >Login</span>
            </NavLink>

        </li>


    </>



    return (

        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className=" w-32 h-32" src="https://i.ibb.co/6R4sfpq/4458381-74.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>

            <div className=" navbar-end" >
                {
                    user ?
                        <button onClick={handleSingOut} className=" btn" > Sign Out </button>
                        :

                        <Link to='/login' > <button className=" btn" > Login </button> </Link>


                }

                {user &&
                    <div className=" flex gap-1" >

                        <div className="  border-green-700 ml-3" >  <h2> {User?.displayName} </h2>
                            <img className="  rounded-full" src={User?.photoURL} alt="" />
                        </div>

                    </div>

                }

                <div><button onClick={handleGoogleSignIn} className=" btn ml-3" > Login With Google </button></div>


            </div> 




        </div>



    );
};

export default Navbar;