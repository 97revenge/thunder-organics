import { MaterialForm } from "../../Form/MaterialForm";

type Props = { children: React.ReactNode };

export const LoginForm = ({ children = <MaterialForm /> }: Props) => {
  return <>{children}</>;
};
