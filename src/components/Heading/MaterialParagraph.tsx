export const MaterialParagraph = ({
  title = "Nao tem conta ?",
  sign = "Registre-se",
}) => {
  return (
    <>
      <p className="text-sm text-gray-500">
        {title}
        <a className="underline ml-3" href="/sign">
          {sign}
        </a>
      </p>
    </>
  );
};
