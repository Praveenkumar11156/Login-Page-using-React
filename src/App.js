import "./styles.css";
import React from "react";
import { useFormik } from "formik";
export default function App() {
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      password: ""
    },

    onSubmit: (values) => {
      alert("login successfuly");
      const order = `<p>the name :${values.text} </p>
       <p>mailid : ${values.email} and possword:${values.password}</p>`;
      document.getElementById("root").innerHTML = order;
    },

    validate: (values) => {
      let errors = {};
      if (!values.text) {
        errors.text = "Required";
        errors.text = <p style={{ color: "red" }}>field required</p>;
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = <p style={{ color: "red" }}>Invalid email address</p>;
      }
      if (!values.password) {
        errors.password = <p style={{ color: "red" }}>field required</p>;
        return errors;
      }
    }
  });

  return (
    <>
      <div className="container">
        <div className="item-container">
          <h2 className="log-in">Log in</h2>
        </div>

        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name">Name : </label>
          <input
            id="name"
            name="text"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.text}
          />{" "}
          <br></br>
          {formik.errors.text ? <div>{formik.errors.text}</div> : null}
          <br></br>
          <label htmlFor="email">Email Address : </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />{" "}
          <br></br>
          {formik.errors.email ? <div>{formik.errors.email}</div> : null}
          <br></br>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <br></br>
          {formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}{" "}
          <br></br>
          <button type="submit">Sign in</button>
          <div className="display-space-between">
            <div>
              <label>
                <input type="checkbox" className="checkbox-label" />
                Remember Me
              </label>
            </div>
            <div>
              <a href="#https://support.google.com/accounts/answer/7682439?hl=en">
                Forget password
              </a>
            </div>
          </div>
        </form>
        <div className="display-space-between">
          <a href="#https://policies.google.com/privacy?hl=en-US">
            privacy policy
          </a>
          <a href="#https://policies.google.com/terms?hl=en-US">
            Terms & condition
          </a>
        </div>
      </div>
    </>
  );
}
