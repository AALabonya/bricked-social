
import { Link,} from "react-router-dom";
import Navbar from "../components/Shared/Nav/Navbar";



const SignIn = () => {



  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
console.log(email, password);
   
  };

  return (
    <div className=" bg-sky-200 rounded-[70px] px-14">
            <Navbar />

            <div

                className="min-h-[calc(100vh-84px)] flex items-center rounded-3xl"
            >

                <form
                    onSubmit={handleSubmit}
                    className="w-2/4 mx-auto border-4 p-2 bg-slate-200 shadow-lg z-30 rounded-[90px]"
                >
                    <div className="text-center my-4">
                        <h1 className="text-2xl uppercase font-nothing">
                        Sign In !
                        </h1>
                    </div>
                   
                    <div className="relative z-0 w-full mb-5 group flex justify-center">
                        <input
                            type="email"
                            name="email"
                            className="w-44 px-2 py-10 rounded-full border bg-yellow-200 focus:outline-none focus:ring text-center"
                            placeholder="email "
                            required
                        />
                      
                    </div>
                    <div className="relative z-0 w-full mb-5 group flex justify-center">
                        <input
                            type="password"
                            name="password"
                            className=" w-44 px-2 py-10 rounded-full bg-yellow-200 text-sm text-center"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 btn && 'btn-disabled'}`}
                        >
                            Sign In
                        </button>
                    </div>
                   
                    <p className="mt-5 text-center font-nothing">
                          New user?{" "}
                        <Link to="/signUp" className="text-blue-600">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>

        </div>
  );
};

export default SignIn;