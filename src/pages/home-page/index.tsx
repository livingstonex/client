import React from "react";
import {
  NavBar,
  Content
} from "../../components/index";

const HomePage: React.FC = () => {
  return (
    <>
        <div className="background">
            <NavBar />
            <Content />
        </div>
    </>
  );
};

export default HomePage;
