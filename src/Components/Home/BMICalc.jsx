import React, { useState } from "react";
import Container from "../../CommonComponents/Container";

const BMICalc = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);
    const [category, setCategory] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!weight || !height) {
            setError("Please enter both weight and height");
            return;
        }
        setError("");


        const heightInMeters = height / 100;

        const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(calculatedBmi);

        if (calculatedBmi < 18.5) {
            setCategory("Underweight");
        } else if (calculatedBmi >= 18.5 && calculatedBmi < 24.9) {
            setCategory("Normal weight");
        } else if (calculatedBmi >= 25 && calculatedBmi < 29.9) {
            setCategory("Overweight");
        } else {
            setCategory("Obesity");
        }
    };

    return (
        <Container>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center text-gray-700 mb-6">BMI Calculator</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="weight" className="block text-gray-700">Weight (kg)</label>
                            <input
                                type="number"
                                id="weight"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full mt-2 p-3 border rounded-lg text-gray-700"
                                placeholder="Enter your weight"
                            />
                        </div>

                        <div>
                            <label htmlFor="height" className="block text-gray-700">Height (cm)</label>
                            <input
                                type="number"
                                id="height"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full mt-2 p-3 border rounded-lg text-gray-700"
                                placeholder="Enter your height"
                            />
                        </div>

                        {error && <p className="text-red-500 text-center">{error}</p>}

                        <button
                            type="submit"
                            className="w-full p-3 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
                        >
                            Calculate BMI
                        </button>
                    </form>

                    {bmi && (
                        <div className="mt-6 text-center">
                            <p className="text-2xl font-semibold text-gray-700">Your BMI: {bmi}</p>
                            <p className="text-xl text-gray-500 mt-2">Category: {category}</p>
                        </div>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default BMICalc;
