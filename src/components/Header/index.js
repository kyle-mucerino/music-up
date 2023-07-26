import React from "react";

function Header(props) {

  return (
    <header className="p-5 mb-4 bg-light">
      <div class="container">
        <div class="row align-items-end">
          <img class='img-fluid' src="logo.png" alt="logo img"></img>
        </div>
        <div class="col-12 col-md-6">
          <h1>Music Up</h1>
          <p>Welcome to Music Up!! Check out what's up by who</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
