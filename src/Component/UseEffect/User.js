import React, { useState, useEffect } from "react";

const loadingMessage = <p>Data is Loading!!!</p>;

function User(props) {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
        // console.log(data);
      });
  }, []);

  //Using Map
  const userDetails = users.map((user, index) => {
    return (
      <div key={index}>
        <h2>UserName:{user.username}</h2>
        <h2>Name:{user.name}</h2>
        <p>Email:{user.email}</p>
        <p>Phone:{user.phone}</p>
        <h4>CompanyName:{user.company.name}</h4>
        <h4>Address:{user.address.city}</h4>
      </div>
    );
  });

  return (
    <div>
      <h1>User Details</h1>
      {isLoading && loadingMessage}
      {userDetails}
    </div>
  );
}

export default User;
