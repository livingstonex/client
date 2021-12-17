import { LoginForm } from "../components";
import * as ReactDom from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Login component tests", () => {
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
        <LoginForm />
      </Provider>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0].name).toBe("email");
    expect(inputs[1].name).toBe("password");
  });

  it("Renders correctly initial document with data-test query", () => {
    expect(
      container.querySelector("[data-test='login-form']")
    ).toBeInTheDocument();

    expect(
      container
        .querySelector("[data-test='login-input-email']")
        ?.getAttribute("name")
    ).toBe("email");

    expect(
      container
        .querySelector("[data-test='login-input-password']")
        ?.getAttribute("name")
    ).toBe("password");
  });
});
