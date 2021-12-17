import { RegisterForm } from "../components";
import * as ReactDom from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Register Form component tests", () => {
  let container: HTMLDivElement;
  const initialState = { output: 10 };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);

    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(
      <Provider store={store}>
        <RegisterForm />
      </Provider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial login page document", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(4);
    expect(inputs[0].name).toBe("firstname");
    expect(inputs[1].name).toBe("lastname");
    expect(inputs[2].name).toBe("email");
    expect(inputs[3].name).toBe("password");
  });

  it("Renders correctly initial register component document with data-test query", () => {
    expect(
      container.querySelector("[data-test='register-form']")
    ).toBeInTheDocument();
  });
});
