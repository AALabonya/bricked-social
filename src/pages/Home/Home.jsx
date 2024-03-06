import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="min-h-[500px] bg-slate-200"><h1 className="font-semibold text-center text-4xl">Featured Sets</h1>

         <Link to="/SpongebobHouse">
         <div className="mt-5 hover:border hover:border-gray-900 w-80 rounded-lg">
          01. Hogwart’s Castle
            <br/>
          <button className="my-4">
                Rating:
                 <br/>
                 <br/>
                Review:
            </button>
          </div>
         </Link>
           
          <div className="mt-5 hover:border hover:border-gray-900 w-80 rounded-lg">
          02. Hogwart’s Castle
            <br/>
          <button className="my-4">
                Rating:
                 <br/>
                 <br/>
                Review:
            </button>
          </div>
        </div>
    )
}

export default Home