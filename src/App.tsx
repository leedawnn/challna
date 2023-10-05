import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import LayoutProvider from './provider/LayoutProvider';
import { setScreenSize } from './utils/styles';
import { themeDefault } from './styles/theme';

const App = () => {
  useEffect(() => {
    setScreenSize();

    window.addEventListener('resize', setScreenSize);

    return () => window.removeEventListener('resize', setScreenSize);
  }, []);

  return (
    <ThemeProvider theme={themeDefault}>
      <LayoutProvider>
        <Outlet />
      </LayoutProvider>
    </ThemeProvider>
  );
};

export default App;
