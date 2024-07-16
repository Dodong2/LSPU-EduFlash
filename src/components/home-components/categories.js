import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const Categories = () => {
  return (
    <>
    <div className='categories'>
    <h1>Categories</h1>
    </div>
      <div className="categories-container">
        <div className="practice-test">
          <span>Preparation</span>
          <h1>Practice Test</h1>
          <p>
            Identifying strengths and weaknesses, building confidence, and
            improving time management skills.
          </p>
          <p>10 subjects</p>
          <button>
            <BsFillPlayFill />
          </button>
        </div>
        <div className="reviewer">
          <span>Assessment</span>
          <h1>Reviewer</h1>
          <p>Solidify your understanding.</p>
          <button>
            <BsFillPlayFill />
          </button>
        </div>
        <div className="performance">
        <span>Analysis</span>
        <h1>Performance</h1>
        <p>Track your performance.</p>
        <button><BsFillPlayFill/></button>
        </div>
        <div className="quiz">
        <span>Preparation</span>
                <h1>Quiz</h1>
                <p>Reinforce your knowledge, assess your understanding, and identify areas needing improvement.</p>
                <p>8 subjects</p>
                <button><BsFillPlayFill/></button>
        </div>
      </div>
    </>
  );
};

export default Categories;
