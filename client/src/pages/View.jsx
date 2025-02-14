import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../axiosapi/api";

const View = () => {
	const [jobData, setJobData] = useState({});
	const { id } = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await api.get(`/${id}`);
				setJobData(response.data);
			} catch (error) {
				console.log("Error in fetching by id" + error);
			}
		};
		fetchData();
	}, [id]);

	console.log(jobData);
	return (
		<main className="mx-auto max-w-7xl p-6">
			<div className="grid h-[80dvh] grid-cols-1 gap-8 md:grid-cols-3">
				<div className="col-span-2 flex justify-center">
					<img
						src={jobData.profileImage}
						alt={jobData.applicantName}
						className="h-auto w-full transform rounded-xl object-cover shadow-2xl transition-transform duration-300 hover:scale-105 md:max-w-2xl"
					/>
				</div>

				<div className="flex flex-col items-center justify-center space-y-6 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-8 text-white shadow-lg">
					<h1 className="text-4xl font-extrabold drop-shadow-lg">
						{jobData.applicantName}
					</h1>
					<div className="space-y-3 text-lg">
						<p className="flex items-center gap-2">
							<span className="font-semibold">Position:</span>{" "}
							{jobData.position}
						</p>
						<p className="flex items-center gap-2">
							<span className="font-semibold">Skills:</span>{" "}
							{jobData.skills}
						</p>
						<p className="flex items-center gap-2">
							<span className="font-semibold">Experience:</span>{" "}
							{jobData.experience}
						</p>
					</div>
					<button
						className="transform cursor-pointer rounded-full bg-pink-500 px-6 py-3 text-lg font-semibold shadow-md transition-all hover:scale-105 hover:bg-pink-600"
						onClick={() => navigate("/")}
					>
						Back
					</button>
				</div>
			</div>
		</main>
	);
};

export default View;
