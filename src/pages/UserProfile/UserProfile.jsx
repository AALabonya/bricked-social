import Navbar from "../../components/Shared/Nav/Navbar"
import review from "../../assets/reviews.png"
const UserProfile = () => {
    return (
        <div className="bg-yellow-200 rounded-[70px] px-14 ">
            <Navbar />
            <div className="min-h-[calc(100vh-54px)] ">
                <div className="flex justify-between">
                    <div className=" bg-slate-200 px-5 rounded-[70px] py-10 w-[200px]">
                        <h1 className="">Others you may like:</h1>
                        <h2 className="mt-5"> 01. Hogwart’s Castle</h2>
                        <h2 className="mt-5"> 02. Hogwart’s Castle</h2>
                        <h2 className="mt-5"> 03. Hogwart’s Castle</h2>
                    </div>
                    <div>
                        <h1>User’s Profile Page</h1>
                        <div>
                            <p> Member since: January 2023</p>
                            <p>Sets Completed: 12</p>
                            <p>Currently Building: Avenger’s Tower</p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-full bg-yellow-200 focus:outline-none focus:ring text-end">

                            <img src="https://i.ibb.co/LpR33BN/male-avatar-profile-picture-vector-10210618.jpg" alt="" className="rounded-full w-56" />

                        </div>
                    </div>

                </div>
                <div className="bg-white px-10 rounded-full pt-5 mt-3">
                    <h1 className="text-center">User’s reviews</h1>
                    <div className="flex gap-4 pb-12 mt-5 px-8">
                        <div className="tracking-[4px]"> placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                        </div>
                        <div className="flex">
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default UserProfile