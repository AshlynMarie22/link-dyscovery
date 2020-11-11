import React from "react";
import "./ResourceCard.css";
import SubmitButton from '../Submit Button/SubmitButton';

const ResourceCard = () => {
  return (
    <div>
        <div className="card" id="resource-card">
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              {/* Where the Title will go  */}
              <h5>American Association of Learning Disabilities</h5>
            </div>
            <div className="row">
              {/* Where the Web Address and Description will go */}
              <p> Web Address: www.americanassociationforLD.com </p>
              <p>
                {" "}
                Description: This site offers books articles for coping
                techniques concerning multiple{" "}
              </p>
            </div>
          </div>
          <div className="col-sm-3 ">
            <div className="row">
                {/* This is where the rating will go */}
                <p>THIS IS WHERE STARS GO</p>
            </div>
            <div className="row">
              {/* This is where the Button to submit review will go */}
                <SubmitButton>Submit Review</SubmitButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;