import { Box } from "grommet";

export const FeatureContent = ({ title, subTitle, image }: any) => {
  return (
    <>
      <Box
        pad="medium"
        className={`bg-gradient-to-r from-white to-green-500/50 rounded-md bg-cover bg-center  w-auto h-96  bg-[url(${image})]`}
      >
        <div className="max-w-md  text-center lg:text-left bg-gradient-to-r from-gray-100 to-green-200/50 bg-opacity-5 p-8  rounded-md mb-12 ">
          <header>
            <h2 className="text-xl font-bold text-green-900 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-4 text-black bg-white p-2 rounded-md bg-opacity-25">
              {subTitle}
            </p>
          </header>

          <button className="group mt-auto flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-green-800 px-6 py-2 text-white transition">
            <span className="group flex w-full items-center justify-center rounded py-1 text-center font-bold">
              {" "}
              Shop All{" "}
            </span>
            <svg
              className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </button>
        </div>
      </Box>
    </>
  );
};
