
import Navbar from "../components/Shared/Nav/Navbar"
import { Link } from "react-router-dom";

import { useState } from "react";

const SignUp = () => {
   

    const [selectedImage, setSelectedImage] = useState(null);
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        const userInfo = {
        
            email,
            password,
            image: selectedImage.name,
        };
        console.log(userInfo);

    };


    return (
        <div className=" bg-sky-200 rounded-[70px] lg:px-14 px-6 pt-2">
            <Navbar />

            <div
             className="min-h-[calc(100vh-84px)] flex items-center rounded-3xl ">

                <form
                    onSubmit={handleSubmit}
                    className="lg:w-2/4 mx-auto border-4 p-2 bg-slate-200 shadow-lg z-30 rounded-[90px] px-6 pb-5 mb-5">
                    <div className="text-center my-4">
                        <h1 className="text-2xl uppercase font-nothing">
                            sign up !
                        </h1>
                    </div>
                   <div className="flex flex-col lg:flex-row items-center  justify-center gap-5">
                   <div>
                   <div className="relative z-0 w-full mb-5 group flex justify-center">
                        <input type="file"
                            name="image"
                            onChange={handleImageChange}

                            className="w-56 px-2 py-10 rounded-full bg-yellow-200 focus:outline-none focus:ring text-end" />
                       
                    </div>
                    <div className="relative z-0 w-full mb-5 group flex justify-center text-black">
                        <input
                            type="text"
                            name="name"
                            className="w-56 px-2 py-10 rounded-full border bg-yellow-200 focus:outline-none focus:ring text-center"
                            placeholder="Name"
                            required
                        />
                      
                    </div>
                   </div>
                   <div>
                   <div className="relative z-0 w-full mb-5 group flex justify-center text-black">
                        <input
                            type="email"
                            name="email"
                            className="w-56 px-2 py-10 rounded-full border text-black bg-yellow-200 focus:outline-none focus:ring text-center"
                            placeholder="Email "
                            required
                        />
                      
                    </div>
                    <div className="relative z-0 w-full mb-5 group flex justify-center">
                        <input
                            type="password"
                            name="password"
                            className="w-56 px-2 py-10 rounded-full bg-yellow-200 text-sm text-center"
                            placeholder="Password"
                            required
/>
                    </div>
                   </div>
                   </div>
                    

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn && 'btn-disabled'}`}
                        >
                            Sign Up
                        </button>
                    </div>
                   
                    <p className="mt-5 text-center font-nothing">
                       Been here before?{" "}
                        <Link to="/signIn" className="text-blue-600">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default SignUp