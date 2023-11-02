export const GoogleAuth = (props: { sign: string }) => {
  return (
    <>
      <div className="flex items-center justify-center h-auto dark:bg-gray-800 mt-12">
        <button className="px-4 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
          <img
            className="w-6 h-6"
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            loading="lazy"
            alt="google logo"
          />
          {props.sign}
        </button>
      </div>
    </>
  );
};
