'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SellerLogin() {
  const [username, setUsername] = useState('seller123');
  const [password, setPassword] = useState('password123');
  const router = useRouter();

  const handleLogin = () => {
    console.log('Logging in as seller:', { username, password });
    router.push('/seller/home'); 
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '300px', margin: 'auto' }}>
      <h3>Seller Login</h3>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={{ width: '100%', marginBottom: '0.5rem', padding: '0.3rem' }}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ width: '100%', marginBottom: '0.5rem', padding: '0.3rem' }}
      />
      <button onClick={handleLogin} style={{ padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none' }}>
        Login
      </button>
    </div>
  );
}
