import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Email is required"),
  fullname: Yup.string().min(3, "Full Name must have more than 3 characters").max(30, "Full Name must not exceed 30 characters").required("Full Name is required"),
  password: Yup.string()
  .min(8, 'Password must be at least 8 characters')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*`~])/,'Password must contain at least one uppercase letter, one lowercase letter, and one special character')
  .required('Password is required')
});

export default validationSchema;
