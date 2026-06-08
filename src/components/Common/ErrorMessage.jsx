import { Alert } from "@mui/material";

const ErrorMessage = ({message}) => {
  return (
    <div className="p-10">
      <Alert variant="filled" severity="error">
            {message}
      </Alert>
    </div>
  );
};
export default ErrorMessage;
