import PropTypes from "prop-types";
const Title = ({ titleOne, titleTwo, description }) => {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <div className="flex items-center justify-center gap-2">
        <h2 className="font-normal text-3xl text-[#707070] uppercase text-center">
          {titleOne} <span className="text-[#343434]">{titleTwo}</span>
        </h2>
        <hr className="w-[50px] h-[4px] bg-[#484848]" />
      </div>
      <p className="text-[#868686] text-lg">{description}</p>
    </div>
  );
};

Title.propTypes = {
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
  description: PropTypes.string,
};
export default Title;
