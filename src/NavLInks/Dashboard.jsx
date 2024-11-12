
import { useContext, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import DataContext from "../Context/Context";

const Dashboard = () => {
    const { fav, setFav } = useContext(DataContext)

    const handleRemove = (item) => {
        const isExist = fav.filter(coffee => coffee.id !== item.id)
        setFav(isExist)
    }

    return (
        <div className="w-11/12 mx-auto mt-28 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                fav.length === 0 ? (<p className="font-bold lg:text-4xl text-2xl text-yellow-400 col-span-3 text-center mt-6">No item added to favorite yet</p>) : (fav.map(item => <div key={item.id} className="card bg-base-100 lg:w-[400px] shadow-xl border cursor-pointer relative hover:bg-gray-100">
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
                    <div className="bg-yellow-300 hover:bg-red-500 w-8 px-2 py-2 rounded-full absolute -top-3 -right-2"><MdDeleteForever onClick={() => handleRemove(item)} className="text-lg text-gray-900" /></div>
                </div>))
            }
        </div>
    );
};

export default Dashboard;