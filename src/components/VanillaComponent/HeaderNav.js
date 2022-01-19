/* eslint-disable react/prop-types */
var React = require("react");
var createReactClass = require("create-react-class");
var { Link } = require("react-router-dom");

//React without ES6, JSX
var HeaderNav = createReactClass({
  LinkComp: function (route) {
    return React.createElement(
      Link,
      {
        to: route,
      },
      React.createElement(
        "span",
        {
          className: this.props.getActiveClass(route),
        },
        route === "/" ? "HOME" : route.split("/")[1].toUpperCase()
      )
    );
  },

  render: function () {
    return React.createElement(
      "nav",
      null,
      this.LinkComp("/"),
      this.LinkComp("/about"),
      this.LinkComp("/contact"),
      !this.props.userName &&
        React.createElement(
          React.Fragment,
          null,
          this.LinkComp("/register"),
          this.LinkComp("/login")
        )
    );
  },
});

module.exports = HeaderNav;
