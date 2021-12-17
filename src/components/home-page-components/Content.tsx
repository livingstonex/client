import React from "react";
import Events from "../../assets/event.png";
import FilledButton from "../utilities/FilledButton";

const Content: React.FC = () => {
  return (
    <div>
      {/* <div className="content-div">
            <p>Awesome events at your finger tips.</p>
            <img src={Events} alt="Events" width="45%" />
        </div> */}
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4 d-flex justify-content-center">
          <div className="d-flex align-items-center">
            <div className="flex-column text-center">
              <p className="text-awesome">
                Explore Awesome events at your finger tips.
              </p>
              <p className="text-awesome-child">14 days free trial.</p>
              <FilledButton href={"/register"} name="Register now" />
            </div>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-center mt-5">
          <div className="d-flex align-items-center">
            <p>
              <img src={Events} alt="Events" width="100%" />
            </p>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Content;
