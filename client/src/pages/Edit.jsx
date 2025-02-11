import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../axiosapi/api";

const Edit = () => {
	const [property, setProperty] = useState({});
	const { id } = useParams();

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

	const handleSubmit = async () => {
		try {
			await api.put(`/${id}`, property);

			alert("Data Updated");
		} catch (error) {
			alert("error in updating" + error);
		}
	};

	const handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		setProperty((curr) => {
			return { ...curr, [name]: value };
		});
	};
	return (
		<div className="mx-auto max-w-[1224px]">
			<div className="text-center text-3xl font-semibold">
				<h1>Property Edit Form</h1>
			</div>
			<form
				className="flex flex-col gap-4 px-6 py-4"
				onSubmit={handleSubmit}
			>
				<div className="w-full">
					<label className="block text-[1.2rem]">Buyer Name</label>
					<input
						type="text"
						placeholder="Buyers Name"
						name="buyerName"
						value={property.buyerName}
						className="mt-2 w-full pt-2 transition-all ease-in-out outline-none placeholder:pl-2 focus:border-b-[1px]"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">Property Type</label>
					<select
						className="mt-2 w-full py-2 outline-none focus:border-b-[1px]"
						name="propertyType"
						value={property.propertyType}
						onChange={handleChange}
					>
						<option value="">Select Property</option>
						<option value="Commercial">Commercial</option>
						<option value="Residential">Residential</option>
						<option value="Land&Plots">Land & Plots</option>
						<option value="Rental">Rental</option>
						<option value="Apartment">Apartment</option>
						<option value="Villa">Villa</option>
						<option value="Duplex">Duplex</option>
					</select>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">Price Range</label>
					<input
						type="text"
						placeholder="Price Range"
						className="mt-2 w-full pt-2 outline-none placeholder:pl-2 focus:border-b-[1px]"
						name="priceRange"
						value={property.priceRange}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">
						Location Preferences
					</label>
					<select
						className="mt-2 w-full py-2 outline-none focus:border-b-[1px]"
						name="location"
						value={property.location}
						onChange={handleChange}
					>
						<option value="">Select Location</option>
						<option value="Chennai">Chennai</option>
						<option value="Bangalore">Bangalore</option>
						<option value="Delhi">Delhi</option>
						<option value="Hyderabad">Hyderabad</option>
						<option value="Kerala">Kerala</option>
					</select>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">Phone No</label>
					<input
						type="text"
						placeholder="Phone Number"
						className="mt-2 w-full pt-2 outline-none placeholder:pl-2 focus:border-b-[1px]"
						name="phoneNo"
						value={property.phoneNo}
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">Email</label>
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={property.email}
						className="mt-2 w-full pt-2 outline-none placeholder:pl-2 focus:border-b-[1px]"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<label className="block text-[1.2rem]">
						Property Image
					</label>
					<input
						type="url"
						placeholder="Property Image"
						name="propertyImage"
						value={property.propertyImage}
						className="mt-2 w-full pt-2 outline-none placeholder:pl-2 focus:border-b-[1px]"
						onChange={handleChange}
					/>
				</div>
				<div className="w-full">
					<button className="w-full cursor-pointer rounded-xl bg-blue-600 px-6 py-2">
						Edit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Edit;
