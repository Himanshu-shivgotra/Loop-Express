import { Link } from "react-router-dom";
import Container from "../../CommonComponents/Container";

const avatars = [
  {
    src: "https://astrolus.netlify.app/images/avatars/avatar-1.webp",
    alt: "Fitness enthusiast avatar 1",
    size: "h-8 w-8",
  },
  {
    src: "https://astrolus.netlify.app/images/avatars/avatar-2.webp",
    alt: "Fitness enthusiast avatar 2",
    size: "h-12 w-12",
  },
  {
    src: "https://astrolus.netlify.app/images/avatars/avatar-3.webp",
    alt: "Fitness enthusiast avatar 3",
    size: "h-16 w-16 z-10",
  },
  {
    src: "https://astrolus.netlify.app/images/avatars/avatar-4.webp",
    alt: "Fitness enthusiast avatar 4",
    size: "h-12 w-12",
  },
  {
    src: "https://astrolus.netlify.app/images/avatars/avatar-2.webp",
    alt: "Fitness enthusiast avatar 5",
    size: "h-8 w-8",
  },
];

export default function CallToAction() {
  return (
    <div className="relative py-16">
      <div
        aria-hidden="true"
        className="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-300 dark:to-indigo-600"></div>
      </div>
      <Container>
        <div className="relative">
          <div className="flex items-center justify-center -space-x-2">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                loading="lazy"
                width="200"
                height="200"
                src={avatar.src}
                alt={avatar.alt}
                className={`${avatar.size} rounded-full object-cover`}
              />
            ))}
          </div>
          <div className="mt-6 m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white md:text-5xl">
              Start Your Fitness Journey Today
            </h1>
            <p className="text-center text-xl text-gray-600 dark:text-gray-300">
              Join thousands of fitness enthusiasts using our platform to reach their health goals. Transform your life with guided workouts, nutrition plans, and more.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to={""}
                className="relative flex h-12 w-full items-center justify-center bg-orange-400 rounded-full px-8 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white dark:text-dark">
                  Get Started
                </span>
              </Link>
              <Link
                to={""}
                className="relative flex h-12 w-full items-center justify-center px-8 before:absolute before:inset-0 rounded-full
                before:bg-gray-400 before:rounded-full
                sm:w-max
                
                "

              >
                <span className="relative text-base font-semibold text-primary hover:text-gray">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
