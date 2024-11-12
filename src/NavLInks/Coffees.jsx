import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../Context/Context";


const Coffees = () => {
    const navigate = useNavigate()
    const [allCoffe, setAllCoffee] = useState([])
    const {data} = useContext(DataContext)

    useEffect(() => {
        setAllCoffee(data)
    }, [data])


    const handleSort = () => {
        const rating = [...data].sort((a, b) => b.rating - a.rating)
        setAllCoffee(rating)
    }
    const handleSortPopularity = () => {
        const popularity = [...data].sort((a, b) => b.popularity - a.popularity)
        setAllCoffee(popularity)
    }

    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="flex md:flex-row flex-col gap-5 justify-between items-center md:mt-28 md:mb-10 lg:mb-12 mt-20 mb-6">
                <div>
                    <h3 className="lg:text-3xl text-2xl">Sort coffees by Rating&Category </h3>
                </div>
                <div className="flex gap-3">
                    <button onClick={handleSort} className='px-5 py-2 hover:bg-yellow-500 font-semibold text-lg rounded-md bg-yellow-400'>
                        Rating</button>
                    <button onClick={handleSortPopularity} className='px-5 py-2 hover:bg-yellow-500 font-semibold text-lg rounded-md bg-yellow-400'>
                        Popularity</button>
                </div>
            </div>
            {/* all coffe cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allCoffe.map(item => <div onClick={() => navigate(`/${item.id}`)} key={item.id} className="card bg-base-100 lg:w-[400px] gap-5 shadow-xl hover:scale-105 border cursor-pointer">
                        <figure className="p-5">
                            <img
                                src={item.image}
                                alt={item.name} className="w-full h-[210px] object-cover rounded-md" />
                        </figure>
                        <div className="px-5 pb-5 font-semibold">
                            <h2 className="text-[17px]">Name: <span className="text-[15px] font-normal">{item.name}</span></h2>
                            <h2 className="text-[17px]">Category: <span className="text-[15px] font-normal">{item.category}</span></h2>
                            <h2 className="text-[17px]">Type: <span className="text-[15px] font-normal">{item.type}</span></h2>
                            <h2 className="text-[17px]">Origin:<span className="text-[15px] font-normal">{item.origin}</span></h2>
                            <h2 className="text-[17px]">Rating: <span className="text-[15px] font-normal">{item.rating}</span></h2>
                            <h2 className="text-[17px]">Popularity: <span className="text-[15px] font-normal">{item.popularity}</span></h2>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Coffees;