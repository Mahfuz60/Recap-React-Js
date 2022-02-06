import React from "react";

function User(props) {
  const { familiars } = props;
  //1.Element Variable
  let greeting;
  if (familiars) {
    greeting = <p>Hello Bondhu ,What are doing Now!</p>;
  } else {
    greeting = <p>Who the Hell are You!</p>;
  }
  //2.ternary operator
  //condition ?(display show this condition is true):(if show this condition is false)

  return (
    <>
      <div>
        <h1>Greeting</h1>
        {greeting}
      </div>
      <div>
        <h1>Food</h1>
        {familiars ? (
          <p>Bondhu colo Bayrani Khaite jai</p>
        ) : (
          <p>Taka Poisa naire </p>
        )}
      </div>
      <div>
        <h1>Share Drink</h1>
        {familiars || (
          <div>
            <p>Unknown Person Attack You</p>
          </div>
        )}
      </div>
      <div>
        <h1>Connection</h1>
        {familiars && (
          <div>
            <p>Dosto Tmr phone number ta dio</p>
          </div>
        )}
      </div>
    </>
  );
}

export default User;
