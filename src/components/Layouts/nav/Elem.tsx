type Props = { children: React.ReactNode };
export const Elem = ({ children }: Partial<Props>) => {
  return (
    <>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </>
  );
};
