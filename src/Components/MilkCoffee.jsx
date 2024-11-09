import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";


const MilkCoffee = () => {
    const navigate = useNavigate()
    const [milkCoffe, setMilkCoffee] = useState([])
    const data = useLoaderData()

    useEffect(() => {
        const milkCoffeeData = data.filter(milkCoffes => milkCoffes.category === 'MilkCoffee').slice(0,6)
        setMilkCoffee(milkCoffeeData)
    }, [data])

    return (
        <div className="w-11/12 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    milkCoffe.map(item => <div onClick={() => navigate(`/${item.id}`)} key={item.id} className="card bg-base-100 w-[350px] shadow-xl hover:scale-105 border">
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

export default MilkCoffee;