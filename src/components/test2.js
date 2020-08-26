import React, { memo } from "react";

/**
 * memo的作用和 class组件中的shouldComponentUpdate以及 PureComponent的作用一样，
 * 都是用来优化性能，避免不必要的render
 */
const Test2 = props => {
  console.log("🌲🌲🌲🌲🌲🌲🌲Test2");
  return (
    <div>
      <div>姓名：{props.info.name}</div>
      <div>分数：{props.info.score}</div>
    </div>
  );
};

export default memo(Test2);
