import { CircularProgress } from "@mui/material";

const Loader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <CircularProgress size={70} />
    </div>
  );
};

export default Loader;  