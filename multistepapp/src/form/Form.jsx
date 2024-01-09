import styles from "./styles/form.module.css";

const Form = () => {
  return (
    <div>
      <div className={styles.formInput}>
        <div className={styles.header}>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address and phone number.</p>
        </div>
        <form>
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
            id="emial"
            name="email"
            placeholder="e.g. stephenking@lorem.com"
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
          />

          <button className={styles.btn}>Next</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
