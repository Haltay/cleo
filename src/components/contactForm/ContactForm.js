import useInput from "../hooks/use-input";

import "./contactForm.css";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const FormContact = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHanddler: nameBlurHandler,
    reset: nameReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredText,
    isValid: textIsValid,
    hasError: textInputHasError,
    valueChangeHandler: textChangedHandler,
    inputBlurHanddler: textBlurHandler,
    reset: textReset,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHanddler: emailBlurHandler,
    reset: emailReset,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && textIsValid && emailIsValid) {
    formIsValid = true;
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs
      .send("service_dv54rfn", templateId, variables)
      .then((res) => {
        successMessage();
      })
      .catch((err) => {
        failMessage("OUPS, something went wrong, try");
      });
  };

  const successMessage = () => {
    const formMess = document.querySelector(".form-message");

    formMess.innerHTML = "Thanks for your message, you will be in touch soon";
    formMess.style.opacity = "1";
    formMess.style.background = "#00c1ec";

    // setTimeout(() => {
    //   formMess.style.opacity = "0";
    // }, 5000);
  };

  const failMessage = (message) => {
    const formMess = document.querySelector(".form-message");

    formMess.innerHTML = message;
    formMess.style.opacity = "1";
    formMess.style.background = "rgb(253,87,87)";
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("form Ok");

    sendFeedback("template_h12c12j", {
      enteredName,
      enteredEmail,
      enteredText,
    });

    nameReset();
    textReset();
    emailReset();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  const textInputClasses = textInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            onChange={nameChangedHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          />
          {nameInputHasError && (
            <p className="error-text">Name must not be empty</p>
          )}
        </div>

        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            onChange={emailChangedHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          />
          {emailInputHasError && (
            <p className="error-text">Email must have @</p>
          )}
        </div>

        <div className={textInputClasses}>
          <label htmlFor="message">Message</label>
          <textarea
            id="text"
            name="text"
            placeholder="Your message to Cleo Childminding"
            onChange={textChangedHandler}
            onBlur={textBlurHandler}
            value={enteredText}
          />
          {textInputHasError && (
            <p className="error-text">Message must not be empty</p>
          )}
        </div>
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Send</button>
      </div>

      <div className="form-message"></div>
    </form>
  );
};

export default FormContact;
