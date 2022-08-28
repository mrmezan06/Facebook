import "./style.css";
import { ErrorMessage, useField } from "formik";

const LoginInput = ({ placeholder, bottom, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={meta.touched && meta.error ? "input_error" : ""}
          style={{ transform: "translateY(3px)" }}
        >
          {meta.touched && meta.error ? (
            <ErrorMessage name={field.name} />
          ) : null}
          {meta.touched && meta.error && (
            <div className="error_arrow_top"></div>
          )}
        </div>
      )}
      <input
        className={meta.touched && meta.error ? "input_error_border" : ""}
        type={field.type}
        meta={meta.name}
        placeholder={placeholder}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && bottom && (
        <div
          className={meta.touched && meta.error ? "input_error" : ""}
          style={{ transform: "translateY(1px)" }}
        >
          {meta.touched && meta.error ? (
            <ErrorMessage name={field.name} />
          ) : null}
          {meta.touched && meta.error && (
            <div className="error_arrow_bottom"></div>
          )}
        </div>
      )}
      {meta.touched && meta.error ? (
        <i className="error_icon" style={{ top: `${!bottom && "62%"}` }}></i>
      ) : null}
    </div>
  );
};

export default LoginInput;
