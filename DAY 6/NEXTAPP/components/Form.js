import './Form.css';

const Form = () => {
  return (
    <>
      <div className="formcon">
        <form className="formContainer">
          <h1>Signup Form</h1>
          <p>Register for continue</p>
          <input type="username" placeholder="Username" /><br />
          <input type="email" placeholder="Email" /><br />
          <input type="password" placeholder="Password" /><br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
