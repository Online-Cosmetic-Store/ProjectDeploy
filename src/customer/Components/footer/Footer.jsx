import { Grid, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Company
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Maybelline
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Lakme
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Nyka
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          Loreal Paris
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          BlueHeaven
        </Typography>
      </Grid>
     
      
     
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; online cosmetic store
        </Typography>
        
        
      </Grid>
    </Grid>
  );
};

export default Footer;
