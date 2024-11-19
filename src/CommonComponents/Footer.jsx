import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="relative">
      <div className="container p-8 mx-auto xl:px-0">
        <div className="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5">
          <div className="lg:col-span-2 md:grid-cols-2">
            <div>
              <Link
                className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
                to={""}
              >
                <img
                  alt="N"
                  loading="lazy"
                  decoding="async"
                  data-nimg="1"
                  className="h-[5rem]"
                  style={{ color: "transparent" }}
                  src="https://i.pinimg.com/originals/f6/63/5a/f6635aaf62877672744445aa642f2535.gif"
                />
              </Link>
            </div>
            <div className="max-w-md mt-4 text-gray-500 dark:text-gray-400">
              Loop Express is a comprehensive fitness platform designed to support your wellness journey.
              It offers workout programs, nutrition tracking, and personalized plans—all built with modern
              technology for a seamless experience. Start today and reach your fitness goals with ease!
            </div>


          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Product
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Features
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Pricing
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Company
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Blog
              </Link>
            </div>
          </div>
          <div>
            <div className="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Terms
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Privacy
              </Link>
              <Link
                className="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-orange-400 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
                to={""}
              >
                Legal
              </Link>
            </div>
          </div>
          <div>
            <div>Follow us</div>
            <div className="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
              <Link
                href="https://twitter.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z"></path>
                </svg>
              </Link>
              <Link
                href="https://facebook.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"></path>
                </svg>
              </Link>
              <Link
                href="https://instagram.com/web3templates"
                target="_blank"
                rel="noopener"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2H7c-2.7 0-4.98 2.27-4.98 4.98v9.96c0 2.7 2.27 4.98 4.98 4.98h9.96c2.7 0 4.98-2.27 4.98-4.98V7c0-2.7-2.27-4.98-4.98-4.98zm-4.94 4.45A5.03 5.03 0 0 1 16.03 12c0 2.8-2.23 5.02-5.02 5.02S5.98 14.8 5.98 12s2.23-5.02 5.02-5.02zm0 2c-1.64 0-3 1.36-3 3s1.36 3 3 3 3-1.36 3-3-1.36-3-3-3zm5.84-.72a1.3 1.3 0 1 1 0-2.6 1.3 1.3 0 0 1 0 2.6z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()}.{" "}

          LOOP Express
          {" "}
        </div>
      </div>
    </div>
  );
}

export default Footer;
