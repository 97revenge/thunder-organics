export const MaterialButton = () => {
  return (
    <>
      <button
        type="submit"
        className="inline-block rounded-lg bg-green-700 px-5 py-3 text-sm font-medium text-white"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "feed";
        }}
      >
        Entrar
      </button>
    </>
  );
};
