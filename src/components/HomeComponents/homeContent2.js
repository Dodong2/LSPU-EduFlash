import React from "react";
import { Link } from "react-router-dom";
/***** icons *****/
import { BsFillPlayFill } from "react-icons/bs";
import { IoIosArrowRoundForward } from "react-icons/io";

const homeContent2 = () => {
  return (
    <>
      {/***** Home Content 2 *****/}
      <div className="box-content2">
        <h1>Categories</h1>
        <div className="content2-box">
          {/***** Box Content *****/}
          <div className="parent-box-left">
            <div className="child-box1">
              <span>Preparation</span>
              <h1>Practice Test</h1>
              <p>
                Identifying strengths and weaknesses, building confidence, and
                improving time management skills.
              </p>
              {/***** Child Box Footer *****/}
              <div className="child-box1-footer">
                <span>10 subjects</span>
                <Link to="/">
                  <button>
                    <BsFillPlayFill />
                  </button>
                </Link>
              </div>
            </div>
            <div className="child-box2">
              <span>Analysis</span>
              <h1>Performance</h1>
              <p>Track your performance</p>
              <div>
                <button>
                  <IoIosArrowRoundForward />
                </button>
              </div>
            </div>
          </div>
          <div className="parent-box-right">
            {/***** Box Content *****/}
            <div className="parent-box-right">
              <div className="child-box1">
                <span>Preparation</span>
                <h1>Quiz</h1>
                <p>
                  Reinforce your knowledge, assess your understanding, and
                  identify areas needing improvement.
                </p>
                {/***** Child Box Footer *****/}
                <div className="child-box1-footer">
                  <span>10 subjects</span>
                  <Link to="/">
                    <button>
                      <BsFillPlayFill />
                    </button>
                  </Link>
                </div>
              </div>
              <div className="child-box2">
                <span>Assessment</span>
                <h1>Reviewer</h1>
                <p>Solidify your understanding.</p>
                <div>
                  <button>
                    <IoIosArrowRoundForward />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default homeContent2;
