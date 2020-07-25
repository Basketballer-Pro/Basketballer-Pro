import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/combinedReducers.js";
import thunk from "redux-thunk";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const store = createStore(reducers, applyMiddleware(thunk));
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    div
  );

  expect(div.innerHTML.length).toEqual(10);
  ReactDOM.unmountComponentAtNode(div);
});
