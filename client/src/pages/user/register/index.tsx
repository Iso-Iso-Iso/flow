import React, { createRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import Section from "@layouts/section";
import Input from "@components/input";

// TODO! beautify this

function UserRegistration() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const passwordRepeat = useRef();
  passwordRepeat.current = watch("password");

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="container">
      <Section> wad</Section>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <div className="flex-center">
          <Input
            className="mr-big"
            error={errors.login ? true : false}
            placeholder="Имя пользователя"
            {...register("login", { required: true, minLength: 8 })}
          />
          <Input
            type="email"
            error={errors.mail ? true : false}
            placeholder="Почта"
            {...register("mail", { required: true, minLength: 3 })}
          />
        </div>
        <Input
          type="password"
          error={errors.password ? true : false}
          placeholder="Пароль"
          {...register("password", { required: true, minLength: 3 })}
        />
        <Input
          type="password"
          error={errors.password_repeat ? true : false}
          placeholder="Повторите пароль"
          {...register("password_repeat", {
            required: true,
            minLength: 3,
            validate: (value) => {
              return value === passwordRepeat.current;
            },
          })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default UserRegistration;
