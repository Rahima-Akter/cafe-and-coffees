
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import DataContext from '../Context/Context';
import { useState } from 'react';

const Layout = () => {
    const data = useLoaderData()
    const [fav, setFav] = useState([])

    const handleAddToFav = (item) => {
        const exist = fav.find(coffee => coffee.id === item.id)
        if(!exist){
            setFav([...fav, item])
        }
    }

    return (
        <DataContext.Provider value={{data, fav, handleAddToFav, setFav}}>
            <div className='min-h-screen flex flex-col'>
                <Navbar></Navbar>
                <div className='flex-grow'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </DataContext.Provider>
    );
};

export default Layout;