import React, { useState } from 'react';
import Login from './Login';
import Profile from './Profile';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      {user ? (
        <Profile user={user} />
      ) : (
        <Login onLoginSuccess={setUser} />
      )}
    </div>
  );
}

export default App;