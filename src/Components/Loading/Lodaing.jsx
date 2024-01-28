import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';

export default function Loading() {


  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
