import FormTemplate from "../templates/FormTemplate";
import FormTitle from "../atoms/FormTitle";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncUserRegister, userResetState } from "../../states/user/action";
import InputFormContainer from "../atoms/InputFormContainer";
import LabelForm from "../atoms/LabelForm";
import InputForm from "../atoms/InputForm";
import ButtonSubmit from "../atoms/ButtonSubmit";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { status, message } = useSelector((state) => state.user);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      window.alert("Confirm Password must be same with password!");
      setPassword("");
      setConfirmPassword("");
      return;
    }
    dispatch(asyncUserRegister(name, email, password));
  };

  useEffect(() => {
    if (status == "fail") {
      window.alert(message);
      dispatch(userResetState());
    } else if (status == "success") {
      dispatch(userResetState());
      navigate("/login");
    }
  }, [status, message]);

  return (
    <FormTemplate>
      <FormTitle>Register</FormTitle>
      <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
        <InputFormContainer>
          <LabelForm htmlFor="name">Name</LabelForm>
          <InputForm
            type="text"
            id="name"
            value={name}
            listener={(e) => setName(e.target.value)}
          />
        </InputFormContainer>
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
        <InputFormContainer>
          <LabelForm htmlFor="confirm-password">Confirm Password</LabelForm>
          <InputForm
            type="password"
            id="confirm-password"
            value={confirmPassword}
            listener={(e) => setConfirmPassword(e.target.value)}
          />
        </InputFormContainer>
        <ButtonSubmit>Register</ButtonSubmit>
      </form>

      <div>
        <p className="text-sm">
          Do you have an account?{" "}
          <Link to={`/login`} className="text-orange-500">
            Login
          </Link>
        </p>
      </div>
    </FormTemplate>
  );
};

export default Register;
