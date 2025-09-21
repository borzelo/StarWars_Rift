import Footer from '@/widgets/Footer/Footer';
import Header from '@/widgets/Header/Header';
import { Box } from '@mui/material';
import { Outlet } from 'react-router';

export default function Layout(): React.JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}
