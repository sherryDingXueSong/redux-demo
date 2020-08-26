import React from "react";

export default class Test extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextProps.count == this.props.count) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log("test组件重新render了");
    return <div>{this.props.count}</div>;
  }
}
