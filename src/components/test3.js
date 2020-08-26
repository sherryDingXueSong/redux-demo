import React, { memo } from "react";
export default class Test3 extends React.Component {
  constructor(props) {
    super(props);
  }
  handleClick = index => {
    const { onClick } = this.props;
    onClick && onClick(index);
  };
  render() {
    return (
      <div>
        <h1>hello world</h1>
        {this.props.data.map((item, index) => (
          <div
            onClick={() => {
              this.handleClick(index);
            }}
          >
            {item.title} ------------{item.isFinish ? "已" : "未"}完成
          </div>
        ))}
      </div>
    );
  }
}
