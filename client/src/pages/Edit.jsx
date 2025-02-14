import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axiosapi/api";

const Edit = () => {
	const [jobData, setJobData] = useState({});
	const { id } = useParams();

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

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await api.put(`/${id}`, jobData);

			alert("Data Updated");
		} catch (error) {
			alert("error in updating" + error);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setJobData((curr) => {
			return { ...curr, [name]: value };
		});
	};
	return (
		<div className="mx-auto mt-10 max-w-2xl rounded-lg bg-white p-6 shadow-lg">
			<h1 className="mb-6 text-center text-3xl font-bold">
				jobData Upload Form
			</h1>
			<form className="space-y-4" onSubmit={handleSubmit}>
				{/** Applicant Name **/}
				<div>
					<label className="block text-lg font-medium">
						Applicant Name
					</label>
					<input
						type="text"
						name="applicantName"
						value={jobData.applicantName || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
						placeholder="Enter your name"
					/>
				</div>

				{/** Position **/}
				<div>
					<label className="block text-lg font-medium">
						Position
					</label>
					<select
						name="position"
						value={jobData.position || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
					>
						<option value="">Select Position</option>
						<option value="Software Engineer">
							Software Engineer
						</option>
						<option value="Data Engineer">Data Engineer</option>
						<option value="Full Stack Developer">
							Full Stack Developer
						</option>
						<option value="Data Analyst">Data Analyst</option>
						<option value="DevOps Engineer">DevOps Engineer</option>
						<option value="Data Scientist">Data Scientist</option>
						<option value="Backend Developer">
							Backend Developer
						</option>
					</select>
				</div>

				{/** Skills **/}
				<div>
					<label className="block text-lg font-medium">Skills</label>
					<input
						type="text"
						name="skills"
						value={jobData.skills || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
						placeholder="Enter skills"
					/>
				</div>

				{/** Experience **/}
				<div>
					<label className="block text-lg font-medium">
						Experience
					</label>
					<select
						name="experience"
						value={jobData.experience || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
					>
						<option value="">Choose Experience</option>
						<option value="0-1 Years">0-1 Years</option>
						<option value="1-3 Years">1-3 Years</option>
						<option value="4-7 Years">4-7 Years</option>
						<option value="8+ Years">8+ Years</option>
						<option value="Student">Student</option>
					</select>
				</div>

				{/** Phone Number **/}
				<div>
					<label className="block text-lg font-medium">
						Phone Number
					</label>
					<input
						type="text"
						name="phoneNo"
						value={jobData.phoneNo || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
						placeholder="Enter phone number"
					/>
				</div>

				{/** Email **/}
				<div>
					<label className="block text-lg font-medium">Email</label>
					<input
						type="email"
						name="email"
						value={jobData.email || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
						placeholder="Enter email"
					/>
				</div>

				{/** Profile Image **/}
				<div>
					<label className="block text-lg font-medium">
						Profile Image URL
					</label>
					<input
						type="url"
						name="profileImage"
						value={jobData.profileImage || ""}
						onChange={handleChange}
						className="w-full rounded-lg border p-3 focus:ring focus:ring-blue-300"
						placeholder="Enter image URL"
					/>
				</div>

				{/** Submit Button **/}
				<div>
					<button
						type="submit"
						className="w-full rounded-lg bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-700"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Edit;
