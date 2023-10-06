import React from "react";

import { Link } from "react-router-dom";
import moment from "moment";

import Avatar from "../../Components/Avatar/Avatar";

const DisplayAnswer = ({ question, handleShare }) => {
  return (
    <div>
      {question.answer.map((ans) => (
        <div className="display-ans" key={ans._id}>
          <p>{ans.answerBody}</p>
          <div className="question-actions-user">
            <div>
              <button type="button" onClick={handleShare}>
                Share
              </button>
              <button type="button">Delete</button>
            </div>
            <div>
              <p>answered on {moment(ans.answeredOn).fromNow()}</p>
              <Link
                to={`/Users/${ans.userId}`}
                className="user-link"
                style={{ color: "#0086d8" }}
              >
                <Avatar
                  backgroundColor="lightgreen"
                  px="8px"
                  py="5px"
                  borderRadius="4px"
                >
                  {ans.userAnswered && ans.userAnswered.length > 0
                    ? ans.userAnswered.charAt(0).toUpperCase()
                    : ""}
                </Avatar>
                <div>{ans.userAnswered}</div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayAnswer;
