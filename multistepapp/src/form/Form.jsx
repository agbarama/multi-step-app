import { useState } from "react";
import styles from "./styles/form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [formInputs, setFormInputs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInputs({
      ...formInputs,
      name: name,
      email: email,
      phoneNumber: number,
    });
    setName("");
    setEmail("");
    setNumber("");
    console.log(formInputs);
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
            <label for="name" className={styles.name}>
              Name
            </label>
            <div
              className={styles.errorMessage}
              // id={js - err - msg - n}
            ></div>
          </div>
          <input
            // className={jsFormName}
            type="text"
            id="name"
            name="name"
            placeholder="e.g. Stephen King"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className={styles.err}>
            <label for="email" className={styles.email}>
              Email Address
            </label>
            <div className={styles.errorMessage}></div>
          </div>
          <input
            // className={jsFormEmail}
            type="email"
            id="email"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className={styles.err}>
            <label for="phone" className={styles.phone}>
              Phone Number
            </label>
            <div className={styles.errorMessage}></div>
          </div>
          <input
            // className={jsFormPhone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="e.g. +1 234 567 890"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />

          <button className={styles.btn}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
