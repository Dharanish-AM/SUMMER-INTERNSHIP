'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (loggedInUser && loggedInUser.email) {
      setUserEmail(loggedInUser.email);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    router.push('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-indigo-700">User Blogs</h1>
        <div className="flex items-center space-x-4">
          {userEmail && <span className="text-gray-700 text-sm">Logged in as {userEmail}</span>}
          <button
            onClick={handleLogout}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded"
          >
            Logout
          </button>
        </div>
      </header>
      <main className="p-4 max-w-2xl mx-auto">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-600">No blogs available.</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.id} className="bg-white border p-4 rounded shadow">
                <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-700">{blog.content}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <footer className="py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} User Blogs
      </footer>
    </div>
  );
}