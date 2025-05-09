/* eslint-disable react/prop-types */

import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className="btn btn-primary btn-block capitalize"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <>
          <span className="loading loading-dots loading-xl"></span>
          sending...
        </>
      ) : (
        text || "submit"
      )}
    </button>
  );
};

export default SubmitBtn;
