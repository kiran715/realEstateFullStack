import { useState } from "react";
import api from "../axiosapi/api";

const Form = () => {
    const [estateData, setEstateData] = useState({
        buyerName: "",
        propertyType: "",
        priceRange: "",
        location: "",
        phoneNo: "",
        email: "",
        propertyImage: "",
    });

    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setEstateData((curr) => {
            return { ...curr, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post("/add", estateData);
            setEstateData({
                buyerName: "",
                propertyType: "",
                priceRange: "",
                location: "",
                phoneNo: "",
                email: "",
                propertyImage: "",
            });
            alert("Data posted successfully");
        } catch (err) {
            alert("Error in posting Data" + err);
        }
    };

    console.log(estateData);

    return (
        <div className="max-w-[1224px] mx-auto">
            <div className="text-center text-3xl font-semibold">
                <h1>Property Upload Form</h1>
            </div>
            <form
                className="flex flex-col px-6 py-4 gap-4"
                onSubmit={handleSubmit}>
                <div className="w-full">
                    <label className="text-[1.2rem] block">Buyer Name</label>
                    <input
                        type="text"
                        placeholder="Buyers Name"
                        name="buyerName"
                        value={estateData.buyerName}
                        className="w-full mt-2 pt-2 placeholder:pl-2 outline-none transition-all ease-in-out focus:border-b-[1px]"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <label className="text-[1.2rem] block">Property Type</label>
                    <select
                        className="mt-2 py-2 w-full outline-none focus:border-b-[1px]"
                        name="propertyType"
                        value={estateData.propertyType}
                        onChange={handleChange}>
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
                    <label className="text-[1.2rem] block">Price Range</label>
                    <input
                        type="text"
                        placeholder="Price Range"
                        value={estateData.priceRange}
                        className="focus:border-b-[1px] w-full mt-2 pt-2 placeholder:pl-2 outline-none"
                        name="priceRange"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <label className="text-[1.2rem] block">
                        Location Preferences
                    </label>
                    <select
                        className="mt-2 py-2 w-full outline-none focus:border-b-[1px]"
                        name="location"
                        value={estateData.location}
                        onChange={handleChange}>
                        <option value="">Select Location</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Kerala">Kerala</option>
                    </select>
                </div>
                <div className="w-full">
                    <label className="text-[1.2rem] block">Phone No</label>
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={estateData.phoneNo}
                        className="focus:border-b-[1px] w-full mt-2 pt-2 placeholder:pl-2 outline-none"
                        name="phoneNo"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <label className="text-[1.2rem] block">Email</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={estateData.email}
                        className="focus:border-b-[1px] w-full mt-2 pt-2 placeholder:pl-2 outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <label className="text-[1.2rem] block">
                        Property Image
                    </label>
                    <input
                        type="url"
                        placeholder="Property Image"
                        name="propertyImage"
                        value={estateData.propertyImage}
                        className="focus:border-b-[1px] w-full mt-2 pt-2 placeholder:pl-2 outline-none"
                        onChange={handleChange}
                    />
                </div>
                <div className="w-full">
                    <button className="bg-blue-600 px-6 py-2 rounded-xl w-full cursor-pointer">
                        submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
