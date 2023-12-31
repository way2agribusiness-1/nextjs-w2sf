import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const BackdropLoader = () => {
  return (
    <Backdrop sx={{ color: '#cce813', zIndex: 1500,height:'100vh' }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default BackdropLoader;
