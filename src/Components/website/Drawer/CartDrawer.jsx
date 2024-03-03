import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import { onCloseCartDrawerAction } from "../../../app/features/global";
import { Box, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";

// eslint-disable-next-line react/prop-types
export default function CartDrawer({ children }) {
  const dispatch = useDispatch();
  const onClose = () => dispatch(onCloseCartDrawerAction());
  // @ts-ignore
  const { isOpenCartDrawer } = useSelector((state) => state.global);
  return (
    <div>
      <Drawer
        anchor={"right"}
        open={isOpenCartDrawer}
        onClose={onClose}
        sx={{
          ".MuiDrawer-paperAnchorRight": { width: "100%", bgcolor: "#FEFEFE" },
        }}
      >
        <Stack p={"16px"} alignItems={"flex-end"} alignContent={"flex-end"}>
          <Box
            sx={{
              "&:hover": {
                color: "red",
              },
            }}
            onClick={onClose}
          >
            <Close sx={{ cursor: "pointer" }} fontSize="small" />
          </Box>
        </Stack>
        {children}
      </Drawer>
    </div>
  );
}
