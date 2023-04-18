import React from "react";

const SignUp = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up</h2>
      <form>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            required
          />
        </div>
        <div className="form-control">
          <label htmlFor="password">Password</label>
          <input
            type="confirm"
            name="confirm"
            placeholder="Confirm Password"
            required
          />
        </div>
        <input className="btn-submit" type="submit" value="Sign up" />
      </form>
    </div>
  );
};

export default SignUp;
