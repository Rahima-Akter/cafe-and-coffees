import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="w-11/12 mx-auto rounded-md relative mt-24">
                <img src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?cs=srgb&dl=pexels-quang-nguyen-vinh-222549-2159065.jpg&fm=jpg" alt="" className="w-full object-cover h-[400px] rounded-md" />
                <div className="text-white absolute lg:top-[25%] lg:left-[18%] md:top-[24%] md:left-[9%] z-10 lg:w-[60%] md:w-[80%] top-[20%] left-4 w-[90%]">
                    <h2 className="font-bold text-xl md:text-2xl lg:text-3xl mb-2 text-center">Brewed to Perfection, Delivered to Your Door Where Every Sip Feels Like Home.</h2>
                    <p className="opacity-70 font-semibold lg:text-lg md:text-sm text-xs text-center mx-auto">At our online coffee shop, we don't just deliver coffee – we deliver an experience. From the moment you place your order, we promise an exceptional journey, from the rich aroma to the velvety finish of your perfect cup.</p>
                    <div className="flex justify-center mt-4">
                        <button onClick={() => navigate('/dashboard')} className="px-6 py-3 rounded-xl bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold">Buy Now</button>
                    </div>
                </div>
                <div className="absolute rounded-md inset-0 bg-cover bg-center bg-black bg-opacity-60"></div>
            </div>

        </>
    );
};

export default Banner;                                                                        