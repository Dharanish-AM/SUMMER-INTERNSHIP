

'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Fill in all fields");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (isLogin) {
      const matched = users.find(
        (u) => u.email === email && u.password === password && u.role === role
      );
      if (matched) {
        localStorage.setItem("loggedInUser", JSON.stringify({ email, role }));
        router.push(role === "admin" ? "/admin" : "/user");
      } else {
        alert("Invalid credentials");
      }
    } else {
      const userExists = users.some((u) => u.email === email && u.role === role);
      if (userExists) {
        alert("User already exists with this role");
        return;
      }

      users.push({ email, password, role });
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered, you can now login");
      setIsLogin(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow max-w-sm w-full space-y-4">
        <h2 className="text-xl font-semibold text-center">{isLogin ? 'Login' : 'Sign Up'}</h2>

        <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border p-2">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2"
          required
        />

        <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>

        <p className="text-sm text-center">
          {isLogin ? 'No account?' : 'Already have an account?'}{' '}
          <button type="button" onClick={toggleForm} className="text-indigo-600 underline">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
}