/* eslint-disable react/prop-types */
import { Box, Button, CircularProgress } from "@mui/material";

const MyButton = (props) => {
  return (
    <Box>
      <Button
        type="submit"
        sx={{ bgcolor: "#7F5EC2", mb: 3 }}
        variant="contained"
        // @ts-ignore
        disabled={props.loading && "true"}
      >
        {props.loading && (
          <CircularProgress size={"1.5rem"} sx={{ mr: 1 }} color="inherit" />
        )}
        {props.text}
      </Button>
    </Box>
  );
};

export default MyButton;
