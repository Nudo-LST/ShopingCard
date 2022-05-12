import React from "react";
import "./LoginCard.css";
import TextImput from "UI/Units/TextImput/TextImput";
import btn from "UI/Units/Button/btn";

export default function LoginCard(props) {
  return (
    <div class="card">
      <h1 className="formtabel" style={{}}>
        Login
      </h1>
      <form>
        <TextImput css={{}} type="text" placeholder="Username" />
        <TextImput type="password" placeholder="Password" />
        <div class="button-container">{btn({ text: "Login" })}</div>
        <div class="footer">
          <a href="https://www.google.com">Forgot your password?</a>
          <a href="https://www.google.com">Login</a>
        </div>
      </form>
    </div>
  );
}
