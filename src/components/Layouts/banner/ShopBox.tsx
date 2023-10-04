export const ShopBox = ({ shop, sign }: { shop: string; sign: string }) => {
  return (
    <>
      <div className="mt-8 flex flex-wrap gap-4 text-center lg:ml-16 flex-1">
        <a
          href="/feed"
          className="block w-full rounded bg-green-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          {shop}
        </a>

        <a
          href="/sign"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-green-600 shadow hover:text-green-700 focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          {sign}
        </a>
      </div>
    </>
  );
};
