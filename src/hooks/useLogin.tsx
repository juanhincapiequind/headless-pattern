import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootSate } from "../store/reducers";
import { loginFailure, loginRequest, loginSuccess } from "../store/actions/authActions";

const useLogin = () => {

  const dispatch = useDispatch()
  const {isLoading, error} = useSelector((state: RootSate) => state.auth)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (value: string) => {
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault;
    dispatch(loginRequest());

    try{
      await new Promise((resolve) => setTimeout(resolve, 1000))

      dispatch(loginSuccess(email))
    }catch(error){
      dispatch(loginFailure('Failed to login'))
    }
  };

  return {
    email,
    password,
    isLoading,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  };
};

export default useLogin;
