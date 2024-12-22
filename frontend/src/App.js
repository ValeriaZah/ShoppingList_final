import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './components/Dashboard';
import ShoppingListOverview from './pages/ShoppingListOverview';
import ShoppingListDetail from './pages/ShoppingListDetail';
import Header from './components/Header';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import "../src/App.css";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeWrapper>
      <div className="app">
        <Header />
        <Routes>
          {/* Login Page */}
          <Route path="/" element={<Login />} />

          {/* Register Page */}
          <Route path="/register" element={<Register />} />

          {/* Dashboard Page */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Shopping List Overview */}
          <Route path="/overview" element={<ShoppingListOverview />} />

          {/* Shopping List Detail Page */}
          <Route path="/list/:listId" element={<ShoppingListDetail />} />
        </Routes>
          </div>
        </ThemeWrapper>
      </Router>
    </ThemeProvider>
  );
}

const ThemeWrapper = ({ children }) => {
  const { theme } = useTheme();
  return <div className={theme}>{children}</div>;
};

export default App;
