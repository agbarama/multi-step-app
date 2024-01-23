import { useEffect, useRef, useState } from "react";
import styles from "./styles/form.module.css";
import { useNavigate } from "react-router-dom";

const Form = ({ formData, setFormData, handleSubmit }) => {
  // state for Error message
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  // state for border color
  const [isNameErrBorder, setIsNameErrBorder] = useState(false);
  const [isEmailErrBorder, setIsEmailErrBorder] = useState(false);
  const [isPhoneErrBorder, setIsPhoneErrBorder] = useState(false);

  // saved inputs in local storage
  const activeName = localStorage.getItem("name");
  const activeEmail = localStorage.getItem("email");
  const activeNumber = localStorage.getItem("phone");

  useEffect(() => {
    // On mount, if any inputs are saved in local storage, pass it to be the inputs value if empty
    if (activeName !== null && activeEmail !== null && activeNumber !== null) {
      if (
        formData.name === "" &&
        formData.email === "" &&
        formData.number === ""
      ) {
        setFormData({
          name: activeName,
          email: activeEmail,
          number: activeNumber,
        });
      }
    }
  }, []);

  // // variable to navigate to next page
  const navigate = useNavigate();

  const handlePageChange = (e) => {
    e.preventDefault();

    if (formData.name === "") {
      setNameErr("This field is required");
      setIsNameErrBorder(true);
    } else {
      setNameErr("");
      setIsNameErrBorder(false);
    }

    if (formData.email === "") {
      setEmailErr("This field is required");
      setIsEmailErrBorder(true);
    } else {
      setEmailErr("");
      setIsEmailErrBorder(false);
    }

    if (formData.number === "") {
      setPhoneErr("This field is required");
      setIsPhoneErrBorder(true);
    } else {
      setPhoneErr("");
      setIsPhoneErrBorder(false);
    }

    if (
      formData.name.length > 0 &&
      formData.email.length > 0 &&
      formData.number.length > 0
    ) {
      navigate("/plan");
    }

    //store inputs to local storage
    localStorage.setItem("name", formData.name);
    localStorage.setItem("email", formData.email);
    localStorage.setItem("phone", formData.number);
  };

  return (
    <div>
      <div className={styles.formInput}>
        <div className={styles.header}>
          <h1 className={styles.header}>Personal Info</h1>
          <p className={styles.p}>
            Please provide your name, email address and phone number.
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles.err}>
            <label className={styles.name} htmlFor="name">
              Name
            </label>
            <div className={styles.errorMessage}>{nameErr}</div>
          </div>
          <input
            className={isNameErrBorder ? styles.borderErr : ""}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            autoComplete="name"
            value={formData.name || ""}
            onChange={(e) =>
              setFormData({ ...formData, name: e.currentTarget.value })
            }
          />

          <div className={styles.err}>
            <label className={styles.email} htmlFor="email">
              Email Address
            </label>
            <div className={styles.errorMessage}>{emailErr}</div>
          </div>
          <input
            className={isEmailErrBorder ? styles.borderErr : ""}
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            autoComplete="email"
            // setting an empty state to empty string rather than null
            value={formData.email || ""}
            onChange={(e) =>
              setFormData({ ...formData, email: e.currentTarget.value })
            }
          />

          <div className={styles.err}>
            <label className={styles.phone} htmlFor="phone">
              Phone Number
            </label>
            <div className={styles.errorMessage}>{phoneErr}</div>
          </div>
          <input
            className={isPhoneErrBorder ? styles.borderErr : ""}
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            autoComplete="phone"
            value={formData.number || ""}
            onChange={(e) =>
              setFormData({ ...formData, number: e.currentTarget.value })
            }
          />

          <button onClick={handlePageChange} className={styles.btn}>
            Next Step
          </button>
        </form>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={handlePageChange} className={styles.mobBtn}>
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Form;
