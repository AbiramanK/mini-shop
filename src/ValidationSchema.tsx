import * as Yup from 'yup';

const LoginFormValidationSchema = Yup?.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const ForgotPasswordFormValidationSchema = Yup?.object({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
});

export {LoginFormValidationSchema, ForgotPasswordFormValidationSchema};
