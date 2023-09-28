import { Icon } from "../nav/Icon";
import { MaterialCookies as Cookies } from "../../Cookies";

import { Suspense } from "react";

export const MaterialFooter = () => {
  return (
    <>
      <Suspense fallback={1500}>
        <Cookies />
      </Suspense>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Icon />
            </div>

            <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              <a href="/github/97revenge">
                Copyright &copy; 2023. Deus é fiel.
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
