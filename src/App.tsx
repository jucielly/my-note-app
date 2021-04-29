import React from 'react';
import GlobalStyle from './styles/GlobalStyle'
import Theme from './styles/Theme'
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import { Provider } from 'react-redux'
import { store } from './store'



function App() {
  return (
    <Provider store={store}>
      <Theme>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Theme>
    </Provider>



  );
}

export default App;
