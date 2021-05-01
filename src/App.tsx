import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { AuthProvider } from './context/AuthContext'
import { LessonProvider } from './context/LessonContext'

import Routes from './routes'

function App() {
  return (
    <Router>
      <AuthProvider>
      <LessonProvider>
        <Routes />
      </LessonProvider>
      </AuthProvider>
      <GlobalStyle />
    </Router>
  );
}

export default App;
