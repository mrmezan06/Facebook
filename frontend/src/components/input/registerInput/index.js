import "./style.css";
import { ErrorMessage, useField } from "formik";
import { useMediaQuery } from "react-responsive";

const RegisterInput = ({ placeholder, bottom, ...props }) => {
  const [field, meta] = useField(props);
  const desktopView = useMediaQuery({ query: "(min-width: 850px)" });
  console.log(desktopView);
  return (
    <div className="input_wrap">
      {meta.touched && meta.error && !bottom && (
        <div
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
          style={{ transform: "translateY(3px)" }}
        >
          {meta.touched && meta.error ? (
            <ErrorMessage name={field.name} />
          ) : null}
          {meta.touched && meta.error && (
            <div
              className={desktopView ? "error_arrow_left" : "error_arrow_top"}
            ></div>
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
          className={
            desktopView ? "input_error input_error_desktop" : "input_error"
          }
          style={{ transform: "translateY(1px)" }}
        >
          {meta.touched && meta.error ? (
            <ErrorMessage name={field.name} />
          ) : null}
          {meta.touched && meta.error && (
            <div
              className={
                desktopView ? "error_arrow_left" : "error_arrow_bottom"
              }
            ></div>
          )}
        </div>
      )}
      {meta.touched && meta.error ? (
        <i
          className="error_icon"
          style={{ top: `${!bottom && !desktopView ? "62%" : "15px"}` }}
        ></i>
      ) : null}
    </div>
  );
};

export default RegisterInput;
