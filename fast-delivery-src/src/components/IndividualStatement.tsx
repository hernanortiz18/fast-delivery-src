import React from "react";
import "@/styles/statement.css";
import "@/styles/buttons.css";

type IndividualStatementProps = {
  content: string;
  examples?: string;
};

function IndividualStatement({ content, examples }: IndividualStatementProps) {
  return (
    <>
      <p className="required">Requerido*</p>
      <div className="individual-statement-container">
        <p className="content">{content}</p>
        <p className="examples">{examples}</p>
        <div className="buttons-container">
          <button className="transparentButton2Small">Si</button>
          <button className="transparentButton2Small">No</button>
        </div>
      </div>
    </>
  );
}

export default IndividualStatement;
