export const ProductContent = () => {
  return (
    <>
      <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
        <div className="lg:col-span-3 lg:row-end-1">
          <div className="lg:flex lg:items-start">
            <div className="lg:order-2 lg:ml-5">
              <div className="max-w-xl overflow-hidden rounded-lg flex-1 items-center align-middle justify-center md:ml-20 ">
                <img
                  className="h-full w-full max-w-full object-cover"
                  src="https://source.unsplash.com/random/800x600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-full lg:col-span-2 lg:row-span-2 lg:row-end-2 bg-gray-200 p-3 rounded-lg ">
          <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
            Produto Exemplo
          </h1>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <a
                  href="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Descricao{" "}
                </a>
              </nav>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                accusantium nesciunt fuga.
              </p>
              <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                <h1>99,99</h1>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-green-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-green-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0 mr-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  Adicionar ao carrinho
                </button>
              </div>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                numquam enim facere.
              </p>
              <p className="mt-4">
                Amet consectetur adipisicing elit. Optio numquam enim facere.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
                rerum nostrum eius facere, ad neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
