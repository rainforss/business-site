import axios from "axios";
import { Form, Formik, FormikProps } from "formik";
import * as React from "react";
import { toast } from "react-toastify";
import TextInput from "../TextInput";

interface IEmailListFormProps {}

export class ContactInfoValue {
  emailaddress: string = "";
}

const EmailListForm: React.FunctionComponent<IEmailListFormProps> = (props) => {
  return (
    <Formik
      initialValues={{
        emailaddress: "",
      }}
      onSubmit={async (values, actions) => {
        try {
          actions.setSubmitting(true);
          await axios.put("/api/subscribe", {
            email: values.emailaddress,
          });
          actions.setSubmitting(false);
          actions.resetForm();
          toast.success("You have successfully subscribed to our newsletter!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } catch (error) {
          actions.setSubmitting(false);
          toast.error("Please enter a valid email address!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      }}
    >
      {(props: FormikProps<ContactInfoValue>) => {
        return (
          <Form className="p-0 flex flex-col md:flex-row items-start w-full">
            <TextInput
              id="emailaddress"
              name="emailaddress"
              label="E-Mail Address"
              type="email"
              isRequired
            />
            <button
              type="submit"
              className="mr-auto bg-[#173f5e] text-white mt-8 md:mt-0 md:ml-6 px-8 py-4"
              disabled={props.isSubmitting}
            >
              Subscribe
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default EmailListForm;
