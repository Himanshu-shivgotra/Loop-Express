import Container from "../../CommonComponents/Container"

function Features() {
  return (
    <div id="features">
      <Container>
        <>
          <div className="md:w-2/3 lg:w-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#ff7722]">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
            </svg>

            <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
              Wellness is the complete integration of body, mind, and spirit
            </h2>
            <p className="text-gray-600 dark:text-gray-300">Our mission is to inspire and empower individuals on their journey to health and wellness, no matter their fitness level, background, or goals. We believe everyone deserves the tools, guidance, and support to reach their full potential. Together, we’re building a community where progress is celebrated, challenges are embraced, and every step forward brings us closer to a healthier, happier world..</p>
          </div>
          <div
            className="mt-16 grid divide-x divide-y divide-gray-100 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4 shadow-lg"
          >
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-orange-400/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992651.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="workout illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 transition group-hover:text-[#ff7722]">
                    Strength Training
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Build muscle and strength with structured resistance training plans.
                  </p>
                </div>
                <a href="#" className="flex items-center justify-between group-hover:text-[#ff7722]">
                  <span className="text-sm">Explore Plans</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-orange-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992634.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="yoga illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-[#ff7722]">
                    Yoga & Flexibility
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enhance flexibility and reduce stress with calming yoga routines.
                  </p>
                </div>
                <a href="#" className="flex items-center justify-between group-hover:text-[#ff7722]">
                  <span className="text-sm">Join Classes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-orange-600/10">
              <div className="relative space-y-8 py-12 p-8">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992678.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="cycling illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-[#ff7722]">
                    Cycling Routines
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Improve endurance and stamina with cycling workouts and tracking.
                  </p>
                </div>
                <a href="#" className="flex items-center justify-between group-hover:text-[#ff7722]">
                  <span className="text-sm">Start Cycling</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-orange-600/10">
              <div className="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/992/992684.png"
                  className="w-12"
                  width="512"
                  height="512"
                  alt="nutrition illustration"
                />
                <div className="space-y-2">
                  <h5 className="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-[#ff7722]">
                    Nutrition & Diet
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Stay on track with personalized meal plans and nutrition tracking.
                  </p>
                </div>
                <a href="#" className="flex items-center justify-between group-hover:text-[#ff7722]">
                  <span className="text-sm">See Plans</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </>

      </Container>
    </div>
  )
}

export default Features