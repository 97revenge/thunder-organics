import { Form } from "./Form";
import { Introduction } from "./Introduction";

export const Elem = () => {
  return (
    <>
      <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
        <div className="max-w-xl lg:max-w-3xl">
          <Introduction />
          <Form />
        </div>
      </main>
    </>
  );
};
