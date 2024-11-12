import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import DataContext from "../Context/Context";
import { toast } from "react-toastify";


const CoffeeDetail = () => {
    const { id } = useParams()
    const { data, fav ,handleAddToFav } = useContext(DataContext)
    const [singleCoffe, setSingleCoffe] = useState({})

    useEffect(() => {
        const singleData = data.find(singleCoffeData => singleCoffeData.id == id)
        setSingleCoffe(singleData || null)
    }, [data, id])

    const isExist = fav.find(item => item.id === singleCoffe.id)

    return (
        <div className="w-11/12 mx-auto mt-28 mb-12 bg-white shadow-lg rounded-lg p-5 flex lg:flex-row flex-col justify-between gap-5 border">
            <div className="rounded-lg lg:w-[40%]">
                <img src={singleCoffe.image} alt={singleCoffe.name} className='h-full w-full object-cover rounded-lg ' />
            </div>
            <div className="space-y-2 lg:w-[60%] md:px-3">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-800 md:text-3xl">{singleCoffe.name}</h2>
                    <div className='flex items-center gap-2'>
                    </div>
                    <p className="text-gray-600">{singleCoffe.description}</p>
                    <p className=""><span className="text-xl text-gray-800 font-bold mr-2">Making Process:</span>{singleCoffe.making_process}</p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-bold text-xl">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        {
                            Array.isArray(singleCoffe.ingredients) && singleCoffe.ingredients.length > 0 ? (singleCoffe.ingredients.map((spec, idx) => <li key={idx}>{spec}</li>)) : (<li>no ingredient available</li>)
                        }
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-bold text-xl">Specification:</h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        {singleCoffe.nutrition_info ? (
                            <>
                                <li><strong>Calories:</strong> {singleCoffe.nutrition_info.calories}</li>
                                <li><strong>Fat:</strong> {singleCoffe.nutrition_info.fat}</li>
                                <li><strong>Carbohydrates:</strong> {singleCoffe.nutrition_info.carbohydrates}</li>
                                <li><strong>Protein:</strong> {singleCoffe.nutrition_info.protein}</li>
                            </>
                        ) : (
                            <li>No information available.</li>
                        )}
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-bold text-xl">Rating:</h3>
                    <div className="flex items-center">
                        <div className="flex items-center mb-2 space-x-1">
                            <FaStar className='text-orange-300' /><FaStar className='text-orange-300' /><FaStar className='text-orange-300' /><FaStar className='text-orange-300' />
                            <span className="ml-2 bg-gray-200 rounded-full px-2 text-xs text-gray-600">{singleCoffe.rating}</span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <h3><span className="text-gray-800 font-bold text-xl mr-2">Popularity: </span>{singleCoffe.popularity}</h3>
                    <button 
                    disabled={isExist}
                    onClick={() => {
                        handleAddToFav(singleCoffe); toast.success(`${singleCoffe.name} added to dashboard`, {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "light",
                        });
                    }} className={`px-3 py-2 font-bold bg-yellow-300 hover:bg-yellow-500 rounded-xl md:text-[15px] text-xs float-right ${isExist? 'cursor-not-allowed opacity-50' : ''}`}>Add To Favorite</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetail;