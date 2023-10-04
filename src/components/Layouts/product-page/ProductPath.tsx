export const ProductPath = () => {
  return (
    <>
      <nav className="flex bg-gray-200/90 rounded-xl object-fill w-72 py-0.5 px-2">
        <ol role="list" className="flex items-center">
          <li className="text-left">
            <div className="-m-1">
              <a
                href={window.location.hostname}
                className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
              >
                Todos os Produtos
              </a>
            </div>
          </li>

          <li className="text-left">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <div className="-m-1">
                <a
                  href="/"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  FLV
                </a>
              </div>
            </div>
          </li>

          <li className="text-left">
            <div className="flex items-center">
              <span className="mx-2 text-gray-400">/</span>
              <div className="-m-1">
                <a
                  href="#"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  aria-current="page"
                >
                  Lorem ipsum
                </a>
              </div>
            </div>
          </li>
        </ol>
      </nav>
    </>
  );
};
