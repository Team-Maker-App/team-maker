import { ReactComponent as EmailIcon } from "../../styles/svg/Mail.svg";
import { ReactComponent as TwitterIcon } from "../../styles/svg/twitter.svg";

const Feedback = () => {
  return (
    <div className="flex justify-center items-center">
      <p className="text-white p-1">¿Querés contactarnos?</p>
      <div className="p-1">
        <a href="https://twitter.com/teammakerapp">
          <TwitterIcon height={20} width={20} />
        </a>
      </div>
      <div className="p-1">
        <a href="mailto:teammeakerapp@gmail.com?Subject=Feedback">
          <EmailIcon height={20} width={20} />
        </a>
      </div>
    </div>
  );
};

export default Feedback;
