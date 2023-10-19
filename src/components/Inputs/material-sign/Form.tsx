import { useState, useEffect } from "react";
import { Label } from "./Label";
import { LoginParagraph } from "./LoginParagraph";
import { PrivacyBox } from "./PrivacyBox";
import { User } from "./User";
import { Alert } from "./Alert";
import React from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { userSchema } from "./userSchema";

type UserSchemaType = z.infer<typeof userSchema>;

export let link: Object[] = [];

type Event<type> = React.ChangeEvent<type>;

export const Form = () => {
  const { register } = useForm();

  const [user, setUser] = useState<UserSchemaType>({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [toogle, setToogle] = useState<string | React.ReactNode>("");

  console.log();

  useEffect(() => {}, [user]);

  type Model = string;
  type Action = React.ChangeEvent<HTMLInputElement> | React.SetStateAction<any>;
  const reducer = (model: Model, action?: Action) => {
    switch (model) {
      case "name":
        setUser({
          ...user,
          name: action,
        });
        break;
      case "lastName":
        setUser({
          ...user,
          lastName: action,
        });
        break;
      case "email":
        setUser({
          ...user,
          email: action,
        });
        break;
      case "password":
        setUser({
          ...user,
          password: action,
        });
        break;
      case "submit":
        const result: number = Number(user.name?.length);
        if (result >= 10) {
          setToogle("green");
          link.push(user);
          window.location.href = "/feed";
        } else {
          setToogle("red");
        }
        break;
    }
  };

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

  const { validate } = namespace;

  return (
    <>
      <form
        action="#"
        className="mt-8 grid grid-cols-6 gap-6"
        onSubmit={() => {}}
      >
        <div className="col-span-6 sm:col-span-3 ">
          <Label tag="Nome" />

          <input
            type="text"
            id="FirstName"
            className={
              namespace.name >= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 border border-green-900 "
                : "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 hover:border  "
            }
            {...register("name")}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("name", e.target.value)
            }
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Sobrenome" />
          <input
            type="text"
            id="LastName"
            className={
              namespace.lastName >= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 border border-green-900 "
                : "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 hover:border  "
            }
            {...register("lastName")}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("lastName", e.target.value)
            }
          />
        </div>

        <div className="col-span-6 ">
          <Label tag="Email" />
          <input
            type="email"
            id="Email"
            className={
              namespace.email >= 23
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 border border-green-900 "
                : "mt-1 w-80  rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2   "
            }
            {...register("email")}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("email", e.target.value)
            }
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Senha" />

          <input
            required
            type="password"
            id="Password"
            className={
              namespace.password >= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 border border-green-900 "
                : namespace.password <= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 hover:border "
                : "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 "
            }
            {...register("password")}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("password", e.target.value)
            }
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Comfirme a senha " />
          <input
            required
            type="password"
            id="PasswordConfirmation"
            name="password_confirmation"
            className={
              namespace.password >= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 border border-green-900 "
                : namespace.password <= 15
                ? "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 hover:border "
                : "mt-1 w-full rounded-md  bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1 pl-2 "
            }
          />
        </div>
        <PrivacyBox props={false} />

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            className="inline-block shrink-0 rounded-md border border-green-300 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            onClick={(e: React.ChangeEvent<HTMLInputElement | any>) => {
              e.preventDefault();
              validate();
              return reducer("submit", e.target.value);
            }}
          >
            Crie sua conta
          </button>

          <LoginParagraph />
        </div>
      </form>
      {toogle === "red" ? (
        <Alert.Red
          title="recomfirme seus dados"
          subtitle="Falta de caracteres no nome ou sobrenome ou email"
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
