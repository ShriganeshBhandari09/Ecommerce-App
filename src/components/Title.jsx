import PropTypes from "prop-types";
const Title = ({ titleOne, titleTwo }) => {
  return (
    <div className="flex items-center justify-center flex-col p-10 gap-3">
      <div className="flex items-center justify-center gap-2">
        <h2 className="font-normal text-4xl text-[#707070]">
          {titleOne} <span className="text-[#343434]">{titleTwo}</span>
        </h2>
        <hr className="w-[50px] h-[4px] bg-[#484848] mt-2" />
      </div>
      <p className="text-[#868686] text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the.
      </p>
    </div>
  );
};

Title.propTypes = {
  titleOne: PropTypes.string.isRequired,
  titleTwo: PropTypes.string.isRequired,
};
export default Title;
