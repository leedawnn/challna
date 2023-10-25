import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect, Suspense } from 'react';
import GlobalStyle from './styles/GlobalStyles';
import LayoutProvider from './provider/LayoutProvider';
import ModalProvider from './provider/ModalProvider';
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
      <GlobalStyle />
      <ModalProvider>
        <LayoutProvider>
          <Suspense fallback={<div>loading!</div>}>
            <Outlet />
          </Suspense>
        </LayoutProvider>
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
