import { ThemeProvider } from '@mui/material';
import theme from './theme';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
