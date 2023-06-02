import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import validationSchema from "../Schemas/ValidationRegister";
import axios from 'axios';

const initialUserData={
    name:"",
    email:"",
    password:""
}
const Register = () => {
  const onSubmitHandler = async (values) => {
    try {
      const response = await axios.post('https://dummy.restapiexample.com/api/v1/create', values);
      console.log(response.data); // Handle successful response
    } catch (error) {
      console.error(error); // Handle error
    }
  };
  
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="mb-4 text-center">
                <h3 className="mb-4 display-4 bold-text">
                  Register for an account
                </h3>
              </div>
              <Formik
                initialValues={initialUserData}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
              >
                <Form>
                  <div className="form-group">
                    <label htmlFor="email" >Email</label>
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      placeholder="name@gmail.com"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <Field
                      type="text"
                      id="fullname"
                      name="fullname"
                      className="form-control"
                      placeholder="Fullname"
                    />
                    <ErrorMessage name="fullname" component="div" className="text-danger" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field
                      type="password"
                      id="password"
                      name="password"
                      className="form-control"
                      placeholder="************"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <button className="btn btn-success w-100 green-button" type="submit">
                    Register
                  </button>
                  <p className="text-center">
                    <span className="text-xs font-medium">
                      Already have an account? <Link to="/login">Sign in</Link>
                    </span>
                  </p>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
