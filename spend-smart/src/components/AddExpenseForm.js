import { Formik } from "formik";
import * as yup from "yup";

const expenseSchema = yup.object().shape({
  expenseName: yup
    .string()
    .min(3, "To short!")
    .max(30, "To long!")
    .required("required"),
  expenseCost: yup
    .number()
    .min(1, "to short!")
    .max(100000, "To long!")
    .required("required"),
});

const AddExpenseForm = () => {
  return (
    <Formik
      initialValues={{}}
      validationSchema={expenseSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(props) => (
        <form onSubmit={props.handleSubmit}>
          <div>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="Dropdown" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="action">
                    Income
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="action">
                    ExpenseName
                  </a>
                </li>
                <li className="dropdown-divider"></li>
              </ul>
            </li>
          </div>
          <div className="row">
            <div className="col-sm">
              <label htmlFor="name">Name</label>
              <input
                required="required"
                type="text"
                className="form-control"
                id="name"
                //required props
                name="expenseName"
                onChange={props.handleChange}
                value={props.values.expenseName}
              ></input>
              {props.touched.expenseName && props.errors.expenseName ? (
                <div style={{ color: "red" }}>{props.errors.expenseName}</div>
              ) : null}
            </div>

            <div className="col-sm">
              <label htmlFor="cost">Cost</label>
              <input
                required="required"
                type="text"
                className="form-control"
                id="cost"
                iu7465
                name="expenseCost"
                onChange={props.handleChange}
                value={props.values.expenseCost}
              ></input>
              {/* validation messegs */}
              {props.touched.expenseCost && props.errors.expenseCost ? (
                <div style={{ color: "red" }}> {props.errors.expenseCost}</div>
              ) : null}
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-primary mt-3">
                Save
              </button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default AddExpenseForm;
