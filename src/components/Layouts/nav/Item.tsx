import { SignButton } from "./SignButton";

type Props = { children: React.ReactNode; toogleButton: React.ReactNode };
export const Item: React.FC<Props> = ({ children, toogleButton }) => {
  return (
    <>
      <div className="flex flex-1 items-center justify-end md:justify-between">
        {children}

        <div className="flex items-center gap-4">
          <div className="sm:flex sm:gap-4">
            <SignButton term="Login" tag="login" />
            <SignButton term="Register" tag="sign" />
          </div>
          {toogleButton}
        </div>
      </div>
    </>
  );
};
