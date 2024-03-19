import React, { useState } from "react";
import "@/styles/statement.css";
import "@/styles/buttons.css";

type IndividualStatementProps = {
  content: string;
  examples?: string;
  type: string;
  setFormData: React.Dispatch<
    React.SetStateAction<{
      alcohol: string;
      drugs: string;
      emotional: string;
    }>
  >;
};

function IndividualStatement({
  content,
  examples,
  type,
  setFormData,
}: IndividualStatementProps) {
  const [selected, setSelected] = useState<boolean | null>(null);

  const handleClickNo = () => {
    setSelected(false);
    setFormData((prevState) => {
      return { ...prevState, [type]: false };
    });
  };

  const handleClickSi = () => {
    setSelected(true);
    setFormData((prevState) => {
      return { ...prevState, [type]: true };
    });
  };

  return (
    <>
      <p className="required">Requerido*</p>
      <div className="individual-statement-container">
        <p className="content">{content}</p>
        <p className="examples">{examples}</p>
        <div className="buttons-container">
          <button
            className={` ${
              selected === true ? "selectedButton2Small" : "transparentButton2Small"
            }`}
            onClick={handleClickSi}
          >
            Si
          </button>
          <button
            className={` ${
              selected === false ? "selectedButton2Small" : "transparentButton2Small"
            }`}
            onClick={handleClickNo}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default IndividualStatement;
