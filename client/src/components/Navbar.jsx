import { Link } from "react-router-dom";
const Navbar = () => {
	return (
		<nav className="bg-green-400 px-8 py-4 text-white">
			<div className="m-auto flex max-w-[1224px] items-center gap-16">
				{/* <div>
					<h1 className="text-2xl font-bold">Varsha M</h1>
				</div> */}
				<div>
					<ul className="flex gap-8">
						<li className="rounded-md px-4 py-2 transition-all ease-linear hover:bg-red-400">
							<Link to={"/"} className="font-semibold">
								Home
							</Link>
						</li>
						<li className="rounded-md px-4 py-2 transition-all ease-linear hover:bg-red-400">
							<Link to={"/add"} className="font-semibold">
								Application
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
