import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    </Container>
  );
}
