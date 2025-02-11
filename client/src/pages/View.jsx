import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axiosapi/api";

const View = () => {
	const [property, setProperty] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get(`/${id}`);
				setProperty(response.data);
			} catch (error) {
				console.log("Error in fetching by id" + error);
			}
		};
		fetchData();
	}, [id]);

	console.log(property);
	return (
		<main className="mx-auto max-w-7xl p-6">
			<div className="grid h-[80dvh] grid-cols-1 gap-8 md:grid-cols-3">
				<div className="col-span-2 flex justify-center">
					<img
						src={property.propertyImage}
						alt={property.propertyType}
						className="h-auto w-full rounded-2xl object-cover shadow-lg md:max-w-3xl"
					/>
				</div>

				<div className="flex flex-col items-center justify-center space-y-4">
					<h1 className="text-3xl font-bold text-gray-800">
						{property.propertyType}
					</h1>
					<p className="text-lg text-gray-600">
						<span className="font-semibold">Price Range:</span>{" "}
						{property.priceRange}
					</p>
					<p className="text-lg text-gray-600">
						<span className="font-semibold">Location:</span>{" "}
						{property.location}
					</p>
					<button
						className="cursor-pointer rounded-lg bg-gradient-to-tl from-cyan-600 to-purple-600 px-6 py-2 text-lg text-white"
						onClick={() => navigate("/")}
					>
						back
					</button>
				</div>
			</div>
		</main>
	);
};

export default View;
