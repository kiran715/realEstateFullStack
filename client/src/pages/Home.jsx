import { useEffect, useState } from "react";
import api from "../axiosapi/api";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
	const [jobData, setJobData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get("/");
				setJobData([...response.data]);
			} catch (err) {
				console.log(err);
			}
		};
		fetchData();
	}, []);

	const handleDelete = async (id) => {
		try {
			await api.delete(`/${id}`);
			setJobData(jobData.filter((item) => item._id !== id));
			alert("Data deleted");
		} catch (error) {
			alert("Error in Deleting" + error);
		}
	};

	console.log(jobData);
	return (
		<main className="mx-auto grid max-w-7xl grid-cols-1 gap-6 p-8 sm:grid-cols-2 lg:grid-cols-4">
			{jobData.map((data) => (
				<div
					key={data._id}
					className="rounded-xl bg-white p-6 shadow-lg"
				>
					<img
						src={data.profileImage}
						alt={data.applicantName}
						className="h-48 w-full rounded-lg object-cover"
					/>
					<div className="mt-4 space-y-2">
						<h2 className="text-xl font-semibold">
							{data.applicantName}
						</h2>

						<p className="text-gray-600">Skills: {data.skills}</p>
					</div>
					<div className="mt-4 flex justify-between">
						<button
							className="rounded-lg bg-blue-500 px-4 py-2 text-white"
							onClick={() => navigate(`/view/${data._id}`)}
						>
							View
						</button>
						<button
							className="rounded-lg bg-green-500 px-4 py-2 text-white"
							onClick={() => navigate(`/edit/${data._id}`)}
						>
							Edit
						</button>
						<button
							className="rounded-lg bg-red-500 px-4 py-2 text-white"
							onClick={() => handleDelete(data._id)}
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</main>
	);
};

export default Home;
