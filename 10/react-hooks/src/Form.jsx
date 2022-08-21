import React, { useState } from "react";

const Form = () => {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    password: "",
  });

  const handleClick = (e) => {
    e.preventDefault();

    console.log(userDetails);
  };
  return (
    <div>
      My name is {userDetails.userName} and my password is {userDetails.password}
      <form>
        <input
          type="text"
          value={userDetails.userName}
          onChange={(e) =>
            setUserDetails({ ...userDetails, userName: e.target.value })
          }
        />
        <input
          type="password"
          value={userDetails.password}
          onChange={(e) =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
        />
        <input
          type="submit"
          onClick={(e) => handleClick(e)}
          name="Submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default Form;
