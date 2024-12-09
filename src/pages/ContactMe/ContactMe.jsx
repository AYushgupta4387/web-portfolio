import PropTypes from "prop-types";

import Button from "../../components/Button/Button";

function ContactMe({ onClickStart }) {
  const handleNext = function () {
    onClickStart((prev) => prev + 1);
  };

  const handlePrev = function () {
    onClickStart((prev) => prev - 1);
  };

  return (
    <>
      <h1 style={{ color: "white", fontSize: 50 }}>This is Contact me.</h1>
      <Button buttonClass="mainButton" onClick={handlePrev}>
        Previous
      </Button>
      <Button buttonClass="mainButton" onClick={handleNext}>
        Next
      </Button>
    </>
  );
}

ContactMe.propTypes = {
  onClickStart: PropTypes.func,
};

export default ContactMe;
