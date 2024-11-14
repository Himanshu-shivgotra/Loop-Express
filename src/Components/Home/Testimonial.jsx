import Container from "../../CommonComponents/Container";

const testimonials = [
  {
    name: "Daniella Doe",
    role: "Fitness Enthusiast",
    imgUrl: "https://astrolus.netlify.app/images/avatars/avatar.webp",
    text: "This platform has been a game-changer in my fitness journey! The personalized plans keep me motivated, and the progress tracking helps me see real results."
  },
  {
    name: "Jane Doe",
    role: "Yoga Instructor",
    imgUrl: "https://astrolus.netlify.app/images/avatars/avatar-1.webp",
    text: "I love the variety of on-demand classes. It’s perfect for keeping my practice fresh and engaging. The mindfulness sessions are especially helpful for grounding my day."
  },
  {
    name: "Yanick Doe",
    role: "Personal Trainer",
    imgUrl: "https://astrolus.netlify.app/images/avatars/avatar-2.webp",
    text: "The workout library is unmatched. My clients benefit from the structured routines, and I appreciate the app’s ease of use to manage my sessions."
  },
  {
    name: "Andy Doe",
    role: "Health Coach",
    imgUrl: "https://astrolus.netlify.app/images/avatars/avatar-3.webp",
    text: "Tracking nutrition alongside fitness has been incredibly helpful. The integrated approach to wellness is exactly what I needed to stay on track."
  },
  {
    name: "Yanndy Doe",
    role: "Cycling Enthusiast",
    imgUrl: "https://astrolus.netlify.app/images/avatars/avatar-4.webp",
    text: "The fitness tracking features for cycling are fantastic! I love being able to see my progress after each session and set new goals for myself."
  }
];

function Testimonial() {
  return (
    <div className="text-gray-600 dark:text-gray-300" id="testimonials">
      <Container>
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            We have some fans.
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="flex gap-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src={testimonial.imgUrl}
                  alt={`${testimonial.name} avatar`}
                  loading="lazy"
                />
                <div>
                  <h6 className="text-lg font-medium text-gray-700 dark:text-white">
                    {testimonial.name}
                  </h6>
                  <p className="text-sm text-gray-500 dark:text-gray-300">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="mt-8">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Testimonial;
