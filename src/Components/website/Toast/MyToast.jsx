import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


// eslint-disable-next-line react/prop-types
const MyToast = ({open , massge}) => {

  

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} >
        <Alert
          // onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {massge}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default MyToast;
