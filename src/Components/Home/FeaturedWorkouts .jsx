import React from "react";
import Container from "../../CommonComponents/Container";

const workoutData = [
    {
        id: 1,
        title: "Full Body Strength Training",
        instructor: "John Doe • Strength Coach",
        description:
            "Build overall strength with compound movements that target your entire body, designed to increase muscle mass and endurance.",
        level: "Level 3",
        duration: "60 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea2.jpg",
        badge: "Strength",
    },
    {
        id: 2,
        title: "High-Intensity Interval Training (HIIT)",
        instructor: "Sarah Lee • HIIT Specialist",
        description:
            "Burn fat and build endurance with short bursts of intense activity followed by brief rest periods. Perfect for fat loss!",
        level: "Level 4",
        duration: "30 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea3.webp",
        badge: "HIIT",
    },
    {
        id: 3,
        title: "Yoga for Flexibility & Mobility",
        instructor: "Emily R. • Yoga Instructor",
        description:
            "Enhance your flexibility and mobility with yoga poses that focus on stretching and deep breathing for a relaxed body and mind.",
        level: "Level 2",
        duration: "45 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea4.jpg",
        badge: "Yoga",
    },
    {
        id: 4,
        title: "Cardio Blast for Endurance",
        instructor: "Mark P. • Cardio Expert",
        description:
            "Boost your cardiovascular health with this high-energy cardio workout designed to enhance your endurance and stamina.",
        level: "Level 3",
        duration: "40 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea1.jpg",
        badge: "Cardio",
    },
    {
        id: 5,
        title: "Core Strength and Stability",
        instructor: "Lindsay K. • Core Trainer",
        description:
            "Focus on strengthening your core with targeted exercises to improve posture, balance, and overall functional strength.",
        level: "Level 2",
        duration: "30 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea1.jpg",
        badge: "Core",
    },
    {
        id: 6,
        title: "Pilates for Core and Flexibility",
        instructor: "Jessica M. • Pilates Instructor",
        description:
            "This Pilates session focuses on strengthening your core while improving flexibility and alignment with low-impact exercises.",
        level: "Level 2",
        duration: "45 mins",
        image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea2.jpg",
        badge: "Pilates",
    },
    // {
    //     id: 7,
    //     title: "Kettlebell Training for Strength",
    //     instructor: "Chris L. • Kettlebell Expert",
    //     description:
    //         "Increase strength and endurance with dynamic kettlebell movements designed to target multiple muscle groups for a total-body workout.",
    //     level: "Level 3",
    //     duration: "50 mins",
    //     image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea3.webp",
    //     badge: "Kettlebell",
    // },
    // {
    //     id: 8,
    //     title: "Running for Speed and Endurance",
    //     instructor: "David T. • Running Coach",
    //     description:
    //         "Enhance your running technique and endurance with interval-based training, speed drills, and endurance runs to help you hit your personal best.",
    //     level: "Level 4",
    //     duration: "45 mins",
    //     image: "https://673467ca34f7e7b26d1e39c9--fitphysiqueweb.netlify.app/assets/fea1.jpg",
    //     badge: "Running",
    // },
];

const FeaturedWorkouts = () => {
    return (
        <Container>
            <div className="my-10">
                <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">
                    Featured Workout Collections
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {workoutData.map((workout) => (
                        <div
                            key={workout.id}
                            className="workout-card bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                        >
                            <div className="card-image relative">
                                <img
                                    src={workout.image}
                                    alt={workout.title}
                                    className="w-full h-48 object-cover"
                                />
                                <span className="absolute top-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm">
                                    {workout.badge}
                                </span>
                                <div className="card-info-overlay absolute bottom-0 left-0 bg-black bg-opacity-50 w-full py-2 px-4 flex justify-between text-white">
                                    <span className="level text-sm">{workout.level}</span>
                                    <span className="duration text-sm">{workout.duration}</span>
                                </div>
                            </div>
                            <div className="card-content p-4">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                    {workout.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                                    {workout.instructor}
                                </p>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-2">
                                    {workout.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default FeaturedWorkouts;
