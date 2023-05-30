import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { loginSchema } from '../Schemas/validationLogin';
import {Link} from "react-router-dom";

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: ''
  };

  const handleSubmit = (values) => {
    // Perform login logic here
    console.log('Login form submitted', values);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="mb-4 text-center">
            <h3 className="mb-4 display-4 bold-text">Sign in to your account</h3>
          </div>
          <Formik
                initialValues={initialValues}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <Field type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    placeholder="aliahmad@gmail.com"/>
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <Field
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </div>
                  <button className="btn btn-primary w-100 green-button" type="submit" >
                    Sign In
                  </button>
                  <p className="text-center mt-3">
                    <span className="text-small">
                      Don't have an account?
                      <Link  className="text-decoration-none" to="/register">Sign up</Link>
                    </span>
                  </p>

                </Form>
              </Formik>
              
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
