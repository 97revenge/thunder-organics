import { MaterialParagraph } from "../Heading/MaterialParagraph";
import { IconEmail } from "../Icon/IconEmail";
import { IconPassword } from "../Icon/IconPassword";
import { MaterialLabel } from "../Inputs/MaterialLabel";
import { MaterialButton } from "../button/MaterialButton";

export const MaterialForm = () => {
  return (
    <>
      <form action="" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <MaterialLabel tag="email" />
          <div className="relative">
            <input
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Digite seu E-mail"
            />
            <IconEmail />
          </div>
        </div>
        <MaterialLabel tag="password" />

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Digite sua senha"
          />
          <IconPassword />
        </div>

        <div className="flex items-center justify-between">
          <MaterialParagraph />
          <MaterialButton />
        </div>
      </form>
    </>
  );
};
