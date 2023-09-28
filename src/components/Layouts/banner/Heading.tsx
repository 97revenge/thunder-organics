export const Heading = ({ h1, h2 }: { h1: string; h2: string }) => {
  return (
    <>
      <h1 className="text-5xl font-extrabold sm:text-5xl text-green-900">
        {h1}
        <strong className="block font-extrabold text-green-700">{h2}</strong>
      </h1>
    </>
  );
};
