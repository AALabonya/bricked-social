import Navbar from "../../components/Shared/Nav/Navbar"
import reviews from "../../assets/reviews.png"
const SpongebobHouse = () => {
    return (
        <div className="bg-sky-200 rounded-[70px] px-14 ">
            <Navbar />
            <div className="min-h-[calc(100vh-54px)] ">
                <div className="flex justify-between">
                    <div className=" bg-slate-200 px-5 rounded-[70px] py-10 w-[200px]">
                        <h1 className="font-nothing text-2xl text-center">Others you may like:</h1>
                        <div>
                        <h2 className="mt-5"> 01. Hogwart’s Castle</h2>
                        <button>Rating:</button>
                        </div>
                        <div>
                        <h2 className="mt-5"> 01. Hogwart’s Castle</h2>
                        <button>Rating:</button>
                        </div>
                    </div>
                    <div>
                        <h1>Spongebob’s House</h1>
                        <div className="flex gap-2">
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                        </div>
                        <div>
                            <p> Set #:</p>
                            <p>Part Count:</p>
                            <p>Year released:</p>
                        </div>
                    </div>
                    <div>
                        <div className="rounded-full bg-yellow-200 focus:outline-none focus:ring text-end">

                            <img src="https://i.ibb.co/LpR33BN/male-avatar-profile-picture-vector-10210618.jpg" alt="" className="rounded-full w-56" />

                        </div>
                    </div>

                </div>
                <div className="bg-white px-10 rounded-full pt-5 mt-10 ">
                    <h1 className="text-center">Set Reviews:</h1>
                    <div className="flex gap-4 pb-12 mt-5 px-8">
                        <div className="tracking-[4px]"> placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                        </div>
                        <div>
                        <div className="flex">
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                        </div>
                        <h1 className="tracking-[5px] mt-2">User’s Rating</h1>
                        </div>
                    </div>
                    <div className="flex gap-4 pb-12 mt-5 px-8">
                        <div className="tracking-[4px]"> placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                            placeholder placeholder placeholder placeholder <br />
                        </div>
                        <div>
                        <div className="flex">
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                            <img src={reviews} alt="" className="w-10 h-7" />
                        </div>
                        <h1 className="tracking-[5px] mt-2">User’s Rating</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SpongebobHouse