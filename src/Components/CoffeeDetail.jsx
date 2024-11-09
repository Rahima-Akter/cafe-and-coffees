import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetail = () => {
    const { id } = useParams()
    const data = useLoaderData()
    const [singleCoffe, setSingleCoffe] = useState({})

    useEffect(() => {
        const singleData = data.find(singleCoffeData => singleCoffeData.id == id)
        setSingleCoffe(singleData || null)
    }, [data, id])

    return (
        <div className="w-11/12 mx-auto mt-28 mb-12 bg-white shadow-lg rounded-lg p-5 flex md:flex-row flex-col justify-between gap-5 border">
            <div className="rounded-lg w-[40%]">
                <img src={singleCoffe.image} alt={singleCoffe.name} className='h-full w-full object-cover rounded-lg ' />
            </div>
            <div className="space-y-2 w-[60%]">
                <div className="space-y-1">
                    <h2 className="text-xl font-bold text-gray-800 md:text-3xl">{singleCoffe.name}</h2>
                    <div className='flex items-center gap-2'>
                    </div>
                    <p className="text-gray-600">{singleCoffe.description}</p>
                    <p className="text-gray-800 font-bold">Making Process: <span className="font-normal ml-2">{singleCoffe.making_process}</span></p>
                </div>
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-bold">Ingredients:</h3>
                    <ul className="list-disc list-inside text-gray-600 text-sm">
                        {
                            Array.isArray(singleCoffe.ingredients) && singleCoffe.ingredients.length > 0 ? (singleCoffe.ingredients.map((spec, idx) => <li key={idx}>{spec}</li>)) : 'pookie'
                        }
                    </ul>
                </div>
                <div className="space-y-2">
                    <h3 className="text-gray-800 font-bold">Specification:</h3>
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
                    <h3 className="text-gray-800 font-bold">Rating:</h3>
                    <div className="flex items-center">
                        <div className="flex items-center mb-2 space-x-1">
                            <FaStar className='text-orange-300' /><FaStar className='text-orange-300' /><FaStar className='text-orange-300' /><FaStar className='text-orange-300' />
                            <span className="ml-2 bg-gray-200 rounded-full px-2 text-xs text-gray-600">{singleCoffe.rating}</span>
                        </div>
                    </div>
                </div>
                <h3 className="text-gray-800 font-bold">Popularity: <span className="font-normal ml-2">{singleCoffe.popularity}</span></h3>
            </div>
        </div>
    );
};

export default CoffeeDetail;