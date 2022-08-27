import "./style.css";
import { useField } from "formik";

const LoginInput = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      <input
        type={field.type}
        meta={meta.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
    </div>
  );
};

export default LoginInput;
