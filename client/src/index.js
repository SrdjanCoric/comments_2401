import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return React.createElement("div", {
    children: [
      React.createElement("div", {
        className: "comments",
        children: [
          React.createElement(Comment, {
            author: "Srdjan",
            postedAt: "1 min ago",
            body: "My new comment",
          }),
          React.createElement(Comment, {
            author: "Max",
            postedAt: "2 min ago",
            body: "Max's new comment",
          }),
          React.createElement(Comment, {
            author: "Nick",
            postedAt: "3 min ago",
            body: "Nick's new comment",
          }),
        ],
      }),
    ],
  });
};

const Comment = ({ author, postedAt, body }) => {
  return React.createElement("div", {
    className: "comment",
    children: [
      React.createElement("hr"),
      React.createElement("div", {
        className: "image",
        children: [
          React.createElement("img", {
            src: "https://i.postimg.cc/Y0RcrdHp/no-user-image.gif",
            alt: "Profile image",
          }),
        ],
      }),
      React.createElement("div", {
        className: "header",
        children: [
          React.createElement("h3", { className: "author" }, author),
          React.createElement("span", null, postedAt),
        ],
      }),
      React.createElement("p", null, body),
    ],
  });
};

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(React.createElement(App));
