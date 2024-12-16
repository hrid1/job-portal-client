import Lottie from "lottie-react";
import loading from "../assets/lottie/loading.json";
const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-420px)] ">
      <div className="w-60 md:w-80">
        <Lottie animationData={loading} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
