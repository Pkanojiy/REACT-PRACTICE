import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import './App.css'
function App() {
  return (
<Container maxWidth="sm">
      <Box sx={{ bgcolor: '#00000', height: '100vh' }}>
        <Typography variant='h2'> ToDo List</Typography>
        <Box component="section" sx={{ p: 2}}>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box>
      </Box>
      </Container>
  )
}

export default App