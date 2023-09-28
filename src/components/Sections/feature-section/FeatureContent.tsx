import { Box } from "grommet";

export const FeatureContent = ({ title, subTitle }: any) => {
  return (
    <>
      <Box pad="xlarge" className="bg-gradient-to-r from-white to-gren-500/50">
        <div className="max-w-md mx-auto text-center lg:text-left ">
          <header>
            <h2 className="text-xl font-bold text-green-900 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-4 text-gray-500">{subTitle}</p>
          </header>

          <a
            href="#"
            className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-green-900 border border-green-900 rounded-md hover:shadow focus:outline-none focus:ring"
          >
            Shop All
          </a>
        </div>
      </Box>
    </>
  );
};
