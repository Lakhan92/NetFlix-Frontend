import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../src/utils/userSlice"; // Check this path!
import Header from "../src/components/Header";
import { expect } from "vitest";

describe("Header Component", () => {
  it("Should load the header page", () => {
    const mockStore = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          uid: "test123",
          displayName: "Gemini User",
          email: "test@example.com"
        }
      }
    });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );
    const button = screen.getByText("Sign Out");
    expect(button).toBeInTheDocument();
  });

  it("should load header image", () => {
    const mockStore = configureStore({
      reducer: {
        user: userReducer,
      },
      preloadedState: {
        user: {
          uid: "test123",
          displayName: "Gemini User",
          email: "test@example.com"
        }
      }
    });

    render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </Provider>
    );

    const image = screen.getByAltText("header-logo");
    expect(image).toBeInTheDocument();
  })
});