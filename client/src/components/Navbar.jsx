import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className=" py-6 px-12 bg-linear-to-r from-indigo-500 to-cyan-500 text-white">
            <div className="flex justify-between max-w-[1224px] m-auto">
                <div>
                    <h1 className="text-2xl font-bold">Kiran M K</h1>
                </div>
                <div>
                    <ul className="flex gap-8">
                        <li className="transition-all ease-linear hover:border-b-2  hover:border-b-pink-600">
                            <Link to={"/"} className="font-semibold ">
                                Home
                            </Link>
                        </li>
                        <li className="transition-all ease-linear hover:border-b-2  hover:border-b-pink-600">
                            <Link to={"/add"} className="font-semibold">
                                Add property
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
