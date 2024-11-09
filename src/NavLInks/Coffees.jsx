import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


const Coffees = () => {
    const navigate = useNavigate()
    const [allCoffe, setAllCoffee] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        setAllCoffee(data)
    }, [data])
    return (
        <div className="w-11/12 mx-auto my-20">
            <div className="flex justify-between items-center">
                <h3 className="lg:text-3xl text-xl ">Sort coffees by Rating&Category </h3>
                <div className="flex gap-3">
                    <button className='px-5 py-2 hover:bg-yellow-500 font-semibold text-lg rounded-md bg-yellow-400 my-8'>
                        Rating</button>
                    <button className='px-5 py-2 hover:bg-yellow-500 font-semibold text-lg rounded-md bg-yellow-400 my-8'>
                        Popularity</button>
                </div>
            </div>
            {/* all coffe cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allCoffe.map(item => <div onClick={() => navigate(`/${item.id}`)} key={item.id} className="card bg-base-100 w-[400px] shadow-xl hover:scale-105 border">
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