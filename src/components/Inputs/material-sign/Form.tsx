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

const MaterialSpan = ({ children }: { children: string }) => {
  return (
    <>
      <div className="px-2 underline">{children}</div>
    </>
  );
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
  });

  const [toogle, setToogle] = useState<string | React.ReactNode>("");

  type StateSchemaType = Omit<UserSchemaType, "comfirm">;
  const [user, setUser] = useState<StateSchemaType>({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onsubmit = handleSubmit((data) => {
    setUser({
      ...user,
      name: data.name,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });

    if (user.name.length >= 1) {
      setToogle("green");
    }
  });

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
    setToogle("green");
    window.location.href = "/feed";
  };

  const { operation } = namespace;

  namespace.validate = function () {
    !errors && operation();
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
              !errors.name?.message
                ? "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border "
                : "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border border-red-200"
            }
            {...register("name")}
          />
          {errors.name?.message && (
            <MaterialSpan>{errors.name.message}</MaterialSpan>
          )}
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Sobrenome" />
          <input
            type="text"
            id="LastName"
            className={
              !errors.lastName?.message
                ? "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border"
                : "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border border-red-200"
            }
            {...register("lastName")}
          />
          {errors.lastName?.message && (
            <MaterialSpan children={errors.lastName?.message} />
          )}
        </div>

        <div className="col-span-6 ">
          <Label tag="Email" />
          <input
            type="email"
            id="Email"
            className={
              !errors.email?.message
                ? "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border"
                : "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border border-red-200"
            }
            {...register("email")}
          />
          {errors.email?.message && (
            <MaterialSpan children={errors.email?.message} />
          )}
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Senha" />

          <input
            type="password"
            id="Password"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 border "
            }
            {...register("password")}
          />
          {errors.password?.message && (
            <MaterialSpan children={errors.password?.message} />
          )}
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Comfirme a senha " />
          <input
            type="password"
            id="PasswordConfirmation"
            className={
              "mt-1 w-[275px] rounded-md  bg-gray-100 text-sm text-gray-700 shadow-md h-8 m-1 pl-2 "
            }
          />
          {errors.comfirm?.message && (
            <MaterialSpan children={errors.comfirm.message} />
          )}
        </div>
        <PrivacyBox props={false} />

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4  px-12 ">
          <button
            className=" shrink-0 rounded-md border border-green-300 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            type="submit"
            onClick={() => user.name.length >= 1 && setToogle("green")}
          >
            Crie sua conta
          </button>

          <LoginParagraph />
        </div>
      </form>

      {/* {toogle === "red" ? (
        <Alert.Red
          title="recomfirme seus dados"
          subtitle={errors.root?.message}
        />
      ) : (
        toogle === "green" && (
          <Alert.Green
            title="Registrado com sucesso !!!!"
            subtitle="Voce sera redirecionado em segundos"
          />
        )
      )} */}

      {toogle === "green" && (
        <Alert.Green
          title="Registrado Com Sucesso !!!"
          subtitle="voce sera direcionado em segundos..."
        />
      )}
    </>
  );
};
