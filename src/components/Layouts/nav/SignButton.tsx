export const SignButton = ({ term, tag }: { term: string; tag: string }) => {
  return (
    <>
      <a
        className={
          term == "Login"
            ? "block rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-teal-700"
            : "hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transition hover:text-teal-600/75 sm:block"
        }
        href={tag}
      >
        {term}
      </a>
    </>
  );
};
