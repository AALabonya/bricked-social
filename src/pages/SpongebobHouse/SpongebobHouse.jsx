import Navbar from "../../components/Shared/Nav/Navbar"

import review from "../../assets/reviews.png"

import '@smastrom/react-rating/style.css'
import { useState } from "react";
import { Rating } from "@smastrom/react-rating";

const SpongebobHouse = () => {

    const [reviews, setReviews] = useState(''); 
    const [rating, setRating] = useState(0); 

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Now 'reviews' and 'rating' hold the form values
        console.log('Reviews:', reviews);
        console.log('Rating:', rating);
         
        setReviews('');
        setRating(0);

    };
    return (
        <div className="bg-sky-200 rounded-[70px] lg:px-14 px-6 pt-2">
            <Navbar />
            <div className="min-h-[calc(100vh-54px)] ">
                <div className="flex flex-wrap lg:flex-row justify-center lg:justify-between">
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
                        <h1 className="mt-5 text-center mb-5">Spongebob’s House</h1>
                        <div className="flex gap-2">
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                            <img src={review} alt="" className="w-10 h-7" />
                        </div>
                        <div className="text-center mb-10">
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
                    <form onSubmit={handleFormSubmit}>
                        <div className="flex flex-col md:flex-row lg:justify-around items-center pb-10">
                           
                                <div className="flex py-8">
                                    <div className="mt-5">
                                        <textarea
                                            id="reviewsField"
                                            value={reviews}
                                            onChange={(e) => setReviews(e.target.value)}
                                            className="border"
                                        />
                                         <br />
                                         <label htmlFor="textField">Reviews Field:</label>
                                    </div>
                                    
                                </div>
                                <div>
                                        <div className="flex justify-center items-center mb-2">
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={rating}
                                                onChange={setRating}
                                                isRequired
                                            />
                                        </div>
                                        <h1 className=" text-center mb-3">User’s Rating</h1>
                                    </div>
                            
                            <div className="flex justify-center">
                                <button className="px-4 py-2 h-12 rounded-md bg-sky-200" type="submit">
                                    Post Reviews
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SpongebobHouse