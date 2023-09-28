export const ShopBox = ({ shop, login }: { shop: string; login: string }) => {
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-4 text-center lg:ml-16 flex-1">
        <a
          href="#"
          className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          {shop}
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          {login}
        </a>
      </div>
    </>
  );
};
