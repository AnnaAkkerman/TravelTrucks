import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
// import { useDispatch } from "react-redux";
import css from "./BookingForm.module.css";

const bookingSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, <span className={css.formErrorMessage}>Too short!</span>)
    .max(50, <span className={css.formErrorMessage}>Too long!</span>)
    .required(<span className={css.formErrorMessage}>Required</span>),
  email: Yup.string()
    .required(
      <span className={css.formErrorMessage}>Email address is required!</span>
    )
    .email(
      <span className={css.formErrorMessage}>
        You must enter valid email address!
      </span>
    ),
  bookingDate: Yup.date()
    .required(
      <span className={css.formErrorMessage}>
        Reservation date is required!
      </span>
    )
    .min(
      new Date(),
      <span className={css.formErrorMessage}>
        The date must be in the future!
      </span>
    ),
});

const FORM_INITIAL_VALUES = {
  name: "",
  email: "",
  bookingDate: "",
};

const BookingForm = () => {
  //   const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    //   dispatch(apiLogin(values));
    //   actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        validationSchema={bookingSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.loginForm}>
          <h2>Book your campervan now</h2>
          <p>Stay connected! We are always ready to help you.</p>
          <label>
            {/* <span>Email</span>
            <br /> */}
            <Field
              className={css.loginFormInput}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage component="p" name="name" />
          </label>
          <label>
            <Field
              className={css.loginFormInput}
              type="email"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage component="p" name="email" />
          </label>
          <br />
          <label>
            <Field
              className={css.loginFormInput}
              type="date"
              name="bookingDate"
              placeholder="Booking date*"
            />
            <ErrorMessage component="p" name="bookingDate" />
          </label>
          <label>
            <Field
              className={css.loginFormInput}
              type="text"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage component="p" name="comment" />
          </label>
          <br />
          <button className={css.loginFormBtn} type="submit">
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
