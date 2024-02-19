/* eslint-disable react/prop-types */
import { Alert, Box } from "@mui/material";

const Alertt = (props) => {
  return (
    <Box sx={{ position: "fixid", bottom: "-30px", right: "20px" }}>
      <Alert
        icon={props.icon}
        // @ts-ignore
        severity={`${props.severity}`}
      >
        {props.title}
      </Alert>
    </Box>
  );
};

export default Alertt;
