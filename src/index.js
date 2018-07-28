import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffab00',
    },
    secondary: {
      main: '#2E4668',
    },
  },
  typography: {
    fontFamily: [
      'Kalam',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
     fontWeightMedium: 500,
     fontSize: 16,
  }
})

const store = createStore(reducer, middleware);

ReactDOM.render(
  <Provider store ={ store }>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
 </Provider>,
 document.getElementById('root'));
registerServiceWorker();
