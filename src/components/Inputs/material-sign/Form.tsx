import { useState, useRef, useEffect, HtmlHTMLAttributes } from "react";
import { Label } from "./Label";
import { LoginParagraph } from "./LoginParagraph";
import { PrivacyBox } from "./PrivacyBox";
import { User } from "./User";
import { Alert } from "./Alert";
import React from "react";

export let link: Object[] = [];

type Event<type> = React.ChangeEvent<type>;

export const Form = () => {
  const handleRef = useRef(0);
  const [user, setUser] = useState<Partial<User<string>>>({
    name: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const result: object = {
      name: Object.values(user)[0],
      lastName: Object.values(user)[1],
      email: Object.values(user)[2],
      password: Object.values(user)[3],
    };

    console.log(result);
  }, [user]);

  type Model = string;
  type Action = React.ChangeEvent<HTMLInputElement> | React.SetStateAction<any>;
  const reducer = (model: Model, action: Action) => {
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
        console.log(user);
        alert("registrado com sucesso !!! ");
        link.push(user);
        window.location.href = "/login";
    }
  };

  return (
    <>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <Label tag="Nome" />

          <input
            required
            type="text"
            id="FirstName"
            name="first_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1"
            minLength={5}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("name", e.target.value)
            }
            ref={() => handleRef.current}
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <Label tag="Sobrenome" />

          <input
            required
            type="text"
            id="LastName"
            name="last_name"
            className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1"
            minLength={5}
            onChange={(e: Event<HTMLInputElement>) =>
              reducer("lastName", e.target.value)
            }
          />
        </div>

        <div className="col-span-6 ">
          <Label tag="Email" />
          <input
            required
            type="email"
            id="Email"
            name="email"
            className="mt-1  rounded-md border-gray-200 bg-gray-100 text-xl text-gray-700 shadow-lg h-8 m-1"
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
            name="password"
            className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1"
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
            className="mt-1 w-full rounded-md border-gray-200 bg-gray-100 text-sm text-gray-700 shadow-lg h-8 m-1"
          />
        </div>
        <PrivacyBox />

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <button
            className="inline-block shrink-0 rounded-md border border-green-300 bg-green-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-green-500"
            onClick={(e: React.ChangeEvent<HTMLInputElement | any>) => {
              e.preventDefault();
              return reducer("submit", e.target.value);
            }}
          >
            Crie sua conta
          </button>

          <LoginParagraph />
        </div>
      </form>
      {typeof user.name === "string" ? (
        <Alert.Red title="Usuario nao definido  " />
      ) : (
        <div></div>
      )}
    </>
  );
};
