import { useState } from "react";
import { Label } from "./Label";
import { LoginParagraph } from "./LoginParagraph";
import { PrivacyBox } from "./PrivacyBox";
import { User } from "./User";
import { Alert } from "./Alert";
import React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { userSchema } from "./userSchema";

type UserSchemaType = z.infer<typeof userSchema>;
interface ComfirmType extends UserSchemaType {
  comfirm: {
    password: string;
    comfirm: boolean;
  };
}

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(userSchema),
  });

  console.log(errors);

  const [user, setUser] = useState<ComfirmType>({
    name: "",
    lastName: "",
    email: "",
    password: "",
    comfirm: {
      password: "",
      comfirm: false,
    },
  });

  const onsubmit = handleSubmit((data) => {
    return setUser({
      ...user,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });
  });

  const [toogle, setToogle] = useState<string | React.ReactNode>("");

  interface NameSpace extends User<{}> {
    name: number;
    lastName: number;
    email: number;
    password: number;
    validate?: () => void;
    operation?: () => void;
  }

  const namespace: NameSpace = {
    name: Number(user["name"]?.length),
    lastName: Number(user["lastName"]?.length),
    email: Number(user["email"]?.length),
    password: Number(user["password"]?.length),
  };

  namespace.operation = function () {
    setToogle("red");
  };

  const { operation } = namespace;

  namespace.validate = function () {
    namespace.name <= 5 && operation();
    namespace.lastName <= 5 && operation();
    namespace.email <= 23 && operation();
    namespace.lastName <= 23 && operation();
  };

  return (
    <>
      <form
        action="#"
        className="mt-8 grid grid-cols-6 gap-6 px-10 py-2 sm:px-0  pt-3   rounded-md md:transparent bg-opacity-35"
        onSubmit={onsubmit}
      >
        <div className="col-span-6 sm:col-span-3 ">
          <Label tag="Nome" />

          <input
            type="text"
            id="FirstName"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border"
            }
            {...register("name")}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Sobrenome" />
          <input
            type="text"
            id="LastName"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border "
            }
            {...register("lastName")}
          />
        </div>

        <div className="col-span-6 ">
          <Label tag="Email" />
          <input
            type="email"
            id="Email"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border  "
            }
            {...register("email")}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Senha" />

          <input
            required
            type="password"
            id="Password"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border "
            }
            {...register("password")}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Comfirme a senha " />
          <input
            required
            type="password"
            id="PasswordConfirmation"
            {...register("comfirm")}
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 "
            }
          />
        </div>
        <PrivacyBox props={false} />

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4  px-12 ">
          <a
            className=" shrink-0 rounded-md border border-green-300 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            type="submit"
          >
            Crie sua conta
          </a>

          <LoginParagraph />
        </div>
      </form>

      {user.name && (
        <div>{[user.name, user.lastName, user.email, user.password]}</div>
      )}
      {toogle === "red" ? (
        <Alert.Red
          title="recomfirme seus dados"
          subtitle={JSON.stringify(errors)}
        />
      ) : (
        toogle === "green" && (
          <Alert.Green
            title="Registrado com sucesso !!!!"
            subtitle="Voce sera redirecionado em segundos"
          />
        )
      )}
    </>
  );
};
