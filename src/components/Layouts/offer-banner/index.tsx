export default function MaterialOfferBanner() {
  return (
    <>
      <div className="m-10 mx-4 max-w-screen-lg overflow-hidden rounded-xl border shadow-lg md:pl-8 items-center">
        <div className="flex flex-col overflow-hidden bg-white sm:flex-row md:h-80">
          <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/4 bg-gray-200  bg-opacity-25 rounded-md">
            <div className="w-full h-full  flex-col justify-start  inline-flex gap-1 bg-lime-200   rounded-md items-center">
              <div className=" bg-amber-100 rounded" />
              <div className="text-start text-lime-900 text-2xl font-bold ">
                Produtos em Destaque
              </div>{" "}
              <div className="text-start text-lime-500 text-lg font-bold ">
                da fazenda a sua mesa
              </div>
            </div>
            <p className="mt-4 mb-8 max-w-md text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
              iusto, cumque dolores sit odio ex.
            </p>
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

          <div className="order-first ml-auto h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
            <img
              className="h-full w-full object-cover"
              src="https://source.unsplash.com/random/350x400/?farm"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
}
