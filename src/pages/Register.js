import React from "react";
import { useForm } from "react-hook-form";
import {useDispatch} from 'react-redux'


const Register = () => {
  const dispatch=useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
      dispatch(Register(data))
    };
    console.log(errors);

  ;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Put your First name"
        {...register("firstname", {})}
      />
      <input
        type="text"
        placeholder="Put your Last name"
        {...register("lastname", {})}
      />
      <input type="email" placeholder="Your email" {...register("email", {})} />
      <input
        type="tel"
        placeholder="Mobile Number"
        {...register("mobile", {})}
      />
      <input
        type="password"
        placeholder="Your password"
        {...register("password", {})}
      />

      <input type="submit" />
    </form>
  );
};

export default Register;
