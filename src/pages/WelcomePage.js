import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import userService from "../services/userService";

export default function WelcomePage() {
  let navigate = useNavigate();
  const { user } = useAuth0();
  const initialValues = {
    firstName: user?.given_name,
    lastName: user?.family_name,
    email: user?.email,
    telefon: user?.telefon,
    street: user?.street,
    place: user?.place,
    privacyPolicyAccepted: false,
  };

  const onSubmit = async (values) => {
    try {
      const { privacyPolicyAccepted, ...welcomeForm } = values;
      await userService.saveUser(welcomeForm);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string().required("Email is required"),
    telefon: Yup.string().required("Telefon is required"),
    street: Yup.string().required("Street is required"),
    place: Yup.string().required("Place is required"),
    privacyPolicyAccepted: Yup.boolean().oneOf([true], "Required"),
  });

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="bg-glass ">
            <div className="row gap-4 my-5 m-auto">
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="firstName" className="text-dark">
                    <i>Vorname</i>
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="lastName" className="text-dark">
                  <i>Nachname</i>
                  </label>
                  <Field type="text" name="lastName" className="form-control" />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="email" className="text-dark">
                  <i>Email</i>
                  </label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="telefon" className="text-dark">
                  <i>Telefon</i>
                  </label>
                  <Field
                    type="string"
                    name="telefon"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="telefon"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="street" className="text-dark">
                  <i>Strasse und Haus Number</i>
                  </label>
                  <Field type="text" name="street" className="form-control" />
                  <ErrorMessage
                    name="street"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 m-auto">
                <div className="form-group">
                  <label htmlFor="place" className="text-dark">
                  <i>Ort</i>
                  </label>
                  <Field type="text" name="place" className="form-control" />
                  <ErrorMessage
                    name="place"
                    component="div"
                    className="text-danger fw-bold display-6"
                  />
                </div>
              </div>
              <div className="col-5 me-auto">
                <div className="form-group form-check ms-5 mb-4">
                  <Field
                    type="checkbox"
                    name="privacyPolicyAccepted"
                    className="form-check-input"
                    id="privacyPolicyAccepted"
                  />
                  <label
                    htmlFor="privacyPolicyAccepted"
                    className="form-check-label text-dark"
                  >
                    <strong> I accept the Privacy Policy</strong>
                  </label>
                  <ErrorMessage
                    component="div"
                    name="privacyPolicyAccepted"
                    className="text-danger"
                  />
                </div>
                <button
                  type="submit"
                  className="btn ms-5 reservation-btn px-5 py-2"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
