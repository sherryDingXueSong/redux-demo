import React from "react";
import "./index.css";

var img = require("../../assets/images/timg.jpeg");

export default class ScrollCase extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.myRef2 = React.createRef();
    this.myRef3 = React.createRef();
    this.myRef4 = React.createRef();
    this.state = {
      titles: [
        { id: 1, name: "tab-1" },
        { id: 2, name: "tab-2" },
        { id: 3, name: "tab-3" },
        { id: 4, name: "tab-4" }
      ]
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = event => {
    //滚动条高度
    let clientHeight = document.documentElement.clientHeight; //可视区域高度
    let scrollTop = document.documentElement.scrollTop; //滚动条滚动高度
    let scrollHeight = document.documentElement.scrollHeight; //滚动内容高度
    if (scrollTop > this.myRef2.current.offsetTop) {
      console.log("滑动到了Tab-2");
    }
  };

  render() {
    return (
      <div className="container">
        <div className="nav-container">
          <div
            className="nav-item"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth"
              });
            }}
          >
            Tab-1
          </div>
          <div
            className="nav-item"
            onClick={() => {
              this.myRef2.current.classList.add("newClass");
              console.log(
                "🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋🦋",
                this.myRef2.current,
                this.myRef2.current.classList
              );

              window.scrollTo({
                top: this.myRef2.current.offsetTop,
                behavior: "smooth"
              });
            }}
          >
            Tab-2
          </div>
          <div
            className="nav-item"
            onClick={() => {
              window.scrollTo({
                top: this.myRef3.current.offsetTop,
                behavior: "smooth"
              });
            }}
          >
            Tab-3
          </div>
          <div
            className="nav-item"
            onClick={() => {
              window.scrollTo({
                top: this.myRef4.current.offsetTop,
                behavior: "smooth"
              });
            }}
          >
            Tab-4
          </div>
        </div>
        <div className="main-container">
          <div className="main-item" ref={this.myRef}>
            {/* <img src={img} className="demo" /> */}
            <div className="demo2"></div>
          </div>
          <div className="main-item" ref={this.myRef2}>
            Tab-2
          </div>
          <div className="main-item" ref={this.myRef3}>
            Tab-3
          </div>
          <div className="main-item" ref={this.myRef4}>
            Tab-4
          </div>
        </div>
      </div>
    );
  }
}
