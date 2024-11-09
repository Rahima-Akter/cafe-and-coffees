import { NavLink } from "react-router-dom";

const Tab = () => {
    return (
        <div className="md:w-3/6 w-5/6 mx-auto mb-8">
            <div role="tablist" className="tabs tabs-boxed">
                <NavLink to="/" role="tab" className={({ isActive }) => `tab font-semibold ${isActive ? 'bg-yellow-300' : ''}`}>Espresso</NavLink>
                <NavLink to="/milkcoffee" role="tab" className={({ isActive }) => `tab font-semibold ${isActive ? 'bg-yellow-300' : ''}`}>Milk Coffee</NavLink>
                <NavLink to="/coldbrew" role="tab" className={({ isActive }) => `tab font-semibold ${isActive ? 'bg-yellow-300' : ''}`}>Cold Brew</NavLink>
            </div>
        </div>
    );
};

export default Tab;