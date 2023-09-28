import { Icon } from "../../Layouts/nav/Icon";

export const Introduction = () => {
  return (
    <>
      <a className="block text-blue-600" href="/">
        <span className="sr-only">Home</span>
        <Icon />
      </a>

      <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Bem Vindo ao Thunder Organicos ❇
      </h1>

      <p className="mt-4 leading-relaxed text-gray-500">
        Faça login na sua conta de entrega de produtos orgânicos e deixe as boas
        vibrações fluírem.
      </p>
    </>
  );
};
