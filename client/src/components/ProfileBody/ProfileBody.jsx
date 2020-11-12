import React from "react";
// import ProfileModal from "../ProfileModal/ProfileModal";
import ProfilePlaceholder from "../../images/profilePlaceholder.png";

import "./ProfileBody.css";

const ProfileBody = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body defaultStyle">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-3">
                <div className="row">
                  <div className="col-md-12">
                    <img
                      id="profilePic"
                      src={ProfilePlaceholder}
                      alt="placeholder"
                    />
                  </div>
                </div>
                <div className="row ml-2 mb-4">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 input-labels-bold">
                        User's Resources
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 input-labels-bold">
                        User's Saved Resources
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 input-labels">
                <div className="card mb-4" id="profile-card">
                  <div className="row">
                    <div className="col-md-12">
                      <h6>Username: </h6>
                      <h6> Email: {props.email}</h6>
                      <h6> Name: </h6>
                      <h6> Age: </h6>
                      <h6> Gender: </h6>
                      <h6> Location: </h6>
                      <h6> LDs: </h6>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <button className="btn" id="profile-button">
                        Edit Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12">
                      <h6 className="input-labels-bold">About Me:</h6>
                      </div>
                    </div>
                    <div className="row ml-1">
                      <div className="col-md-12 input-labels">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consectetur autem eos nisi id placeat ex aspernatur culpa,
                      a dolorum sequi omnis! Est ea optio unde animi
                      voluptatibus. Fuga, pariatur possimus. Lorem ipsum dolor
                      sit amet consectetur adipisicing elit. Minus, eum. A natus
                      rerum facilis, cumque eos ipsum ut deleniti quibusdam
                      mollitia optio atque repellendus, voluptates iste ratione
                      cum! Non, iusto.
                    </p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBody;
