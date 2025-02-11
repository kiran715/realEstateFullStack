import { useEffect, useState } from "react";
import api from "../axiosapi/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
	const [propertyData, setPropertyData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/");
				setPropertyData([...response.data]);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			await api.delete(`/${id}`);
			setPropertyData(propertyData.filter((item) => item._id !== id));
			alert("Data deleted");
		} catch (error) {
			alert("Error in Deleting" + error);
		}
	};

	console.log(propertyData);
	return (
		<main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 gap-y-12 p-8 sm:grid-cols-2 lg:grid-cols-3">
			{propertyData.map((data) => {
				return (
					<div key={data._id}>
						<div className="card_article relative overflow-hidden">
							<img
								src={data.propertyImage}
								alt="Image"
								className="w-96 rounded-2xl"
							/>
							<div className="card_data absolute right-0 bottom-[-9rem] left-0 mx-auto w-80 space-y-2 rounded-lg bg-gray-100 px-4 py-2 opacity-0 shadow shadow-blue-200">
								<h1 className="text-center text-2xl font-medium">
									{data.propertyType}
								</h1>
								<h1 className="text-center text-lg">
									{data.priceRange}
								</h1>
								<div className="flex justify-between">
									<button
										className="cursor-pointer rounded-xl bg-cyan-500 px-6 py-2"
										onClick={() =>
											navigate(`/view/${data._id}`)
										}
									>
										View
									</button>
									<button
										className="cursor-pointer rounded-xl bg-cyan-500 px-6 py-2"
										onClick={() =>
											navigate(`/edit/${data._id}`)
										}
									>
										Edit
									</button>
									<button
										className="cursor-pointer rounded-xl bg-cyan-500 px-6 py-2"
										onClick={() => handleDelete(data._id)}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</main>
	);
};

export default Home;
