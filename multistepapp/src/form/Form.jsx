import { useRef, useState } from "react";
import styles from "./styles/form.module.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  // Input value
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // Form submit array to save inputs
  const [formInputs, setFormInputs] = useState([]);

  // state for Error message
  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [phoneErr, setPhoneErr] = useState("");

  // state for border color
  const [isNameErrBorder, setIsNameErrBorder] = useState(false);
  const [isEmailErrBorder, setIsEmailErrBorder] = useState(false);
  const [isPhoneErrBorder, setIsPhoneErrBorder] = useState(false);

  // // Ref DOM manipulated
  // const nameInput = useRef();
  // const emailInput = useRef();
  // const phoneInput = useRef();

  // saved inputs in local storage
  const activeName = localStorage.getItem("name");
  const activeEmail = localStorage.getItem("email");
  const activeNumber = localStorage.getItem("phone");

  // On refresh, if any inputs are saved in local storage, pass it to be the inputs value if empty
  if (name === "" && email === "" && number === "") {
    setName(activeName);
    setEmail(activeEmail);
    setNumber(activeNumber);
  }

  // // variable to navigate to next page
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInputs({
      ...formInputs,
      name: name,
      email: email,
      phoneNumber: number,
    });
    // setName("");
    // setEmail("");
    // setNumber("");
    console.log(formInputs);
  };

  const handlePageChange = () => {
    if (name.trim() === "") {
      setNameErr("This field is required");
      setIsNameErrBorder(true);
    } else {
      setNameErr("");
      setIsNameErrBorder(false);
    }

    if (email.trim() === "") {
      setEmailErr("This field is required");
      setIsEmailErrBorder(true);
    } else {
      setEmailErr("");
      setIsEmailErrBorder(false);
    }

    if (number.trim() === "") {
      setPhoneErr("This field is required");
      setIsPhoneErrBorder(true);
    } else {
      setPhoneErr("");
      setIsPhoneErrBorder(false);
    }

    // // // variable to navigate to next page
    // const navigate = useNavigate();

    if (name.length > 0 && email.length > 0 && number.length > 0) {
      navigate("/plan");
    }

    //store inputs to local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", number);
  };

  return (
    <div>
      <div className={styles.formInput}>
        <div className={styles.header}>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>
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
            value={name || ""}
            onChange={(e) => setName(e.target.value)}
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
            value={email || ""}
            onChange={(e) => setEmail(e.target.value)}
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
            value={number || ""}
            onChange={(e) => setNumber(e.target.value)}
          />

          <button onClick={handlePageChange} className={styles.btn}>
            Next Step
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
