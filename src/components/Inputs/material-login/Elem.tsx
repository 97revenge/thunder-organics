import { BackgroundHalfLogin } from "../../Backgrounds/BackgroundHalfLogin";
import { IntroElem } from "../../Heading/IntroElem";
import { LoginForm } from "./LoginForm";

export const Elem = ({ children = <LoginForm children={undefined} /> }) => {
  return (
    <>
      <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
        <IntroElem />
        {children}
      </div>
      <BackgroundHalfLogin />
    </>
  );
};
