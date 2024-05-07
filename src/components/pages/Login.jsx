import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormTemplate from "../templates/FormTemplate";
import InputFormContainer from "../atoms/InputFormContainer";
import FormTitle from "../atoms/FormTitle";
import LabelForm from "../atoms/LabelForm";
import InputForm from "../atoms/InputForm";
import ButtonSubmit from "../atoms/ButtonSubmit";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserLogin, userResetState } from "../../states/user/action";
import { putAccessToken } from "../../utils/network-data";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { data, status, message } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncUserLogin(email, password));
  };

  useEffect(() => {
    dispatch(userResetState());
  }, []);

  useEffect(() => {
    if (status == "fail") {
      window.alert(message);
      dispatch(userResetState());
    } else if (status == "success") {
      putAccessToken(data.token);
      navigate("/");
    }
  }, [status]);

  return (
    <FormTemplate>
      <FormTitle>Login</FormTitle>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <InputFormContainer>
          <LabelForm htmlFor="email">Email</LabelForm>
          <InputForm
            type="email"
            id="email"
            value={email}
            listener={(e) => setEmail(e.target.value)}
          />
        </InputFormContainer>
        <InputFormContainer>
          <LabelForm htmlFor="password">Password</LabelForm>
          <InputForm
            type="password"
            id="password"
            value={password}
            listener={(e) => setPassword(e.target.value)}
          />
        </InputFormContainer>
        <ButtonSubmit>Login</ButtonSubmit>
      </form>

      <div>
        <p className="text-sm">
          Don't have an account?{" "}
          <Link to={`/register`} className="text-orange-500">
            Register
          </Link>
        </p>
      </div>
    </FormTemplate>
  );
};

export default Login;
