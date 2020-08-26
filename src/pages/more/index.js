import React from "react";

const More = props => {
  const { userName } = props.location.state;
  return (
    <div>
      <h1>这里是更多界面</h1>
      <div>{userName}</div>
    </div>
  );
};

export default More;
