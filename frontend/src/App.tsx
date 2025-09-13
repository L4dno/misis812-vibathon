import React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import UserProfile from './components/pages/UserProfile';
import CoworkingStatus from './components/pages/CoworkingStatus';
import Achievements from './components/pages/Achievements';
import Donaters from './components/pages/Donaters';
import AdminProfile from './components/pages/AdminProfile';
import AdminCoworkingStatus from './components/pages/AdminCoworkingStatus';
import AdminPanel from './components/pages/AdminPanel';
import AdminDonaters from './components/pages/AdminDonaters';
import Navigation from './components/UI/Navigation';

const App: React.FC = () => {
  return (
    <UserProvider>
      <div className="app-container max-w-md mx-auto h-screen bg-white">
        {/* Ensure Router context is available by adding Router here as well */}
        <Router>
          <Switch>
            {/* Regular user routes */}
            <Route path="/profile" component={UserProfile} />
            <Route path="/coworking" component={CoworkingStatus} />
            <Route path="/achievements" component={Achievements} />
            <Route path="/donaters" component={Donaters} />
            
            {/* Admin routes */}
            <Route path="/admin/profile" component={AdminProfile} />
            <Route path="/admin/coworking" component={AdminCoworkingStatus} />
            <Route path="/admin/panel" component={AdminPanel} />
            <Route path="/admin/donaters" component={AdminDonaters} />
            
            {/* Default redirect */}
            <Redirect from="/" to="/profile" />
          </Switch>
          <Navigation />
        </Router>
      </div>
    </UserProvider>
  );
};

export default App;
