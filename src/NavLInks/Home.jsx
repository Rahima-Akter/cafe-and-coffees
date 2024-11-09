
import { Outlet, useNavigate } from 'react-router-dom';
import Banner from '../Components/Banner';
import HeadingTitle from '../Components/HeadingTitle';
import Tab from '../Components/Tab';

const Home = () => {
    const navigate = useNavigate()


    return (
        <div className=''>
            <Banner></Banner>
            <HeadingTitle title="Browse Coffees by Category" description="Browse your desired coffee category to browse through specific coffees that suites your taste"></HeadingTitle>
            <div className='w-11/12 mx-auto'>
                <Tab></Tab>
                <Outlet></Outlet>
                <div className='w-11/12 mx-auto'>
                    <button onClick={()=> navigate('/coffees')} className='px-5 py-2 hover:bg-yellow-500 font-semibold text-lg rounded-md bg-yellow-400 my-8'>See All</button>
                </div>
            </div>
        </div>
    );
};

export default Home;