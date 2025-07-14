'use client';
import React, { useState, useEffect } from 'react';

export default function Admin() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    setBlogs(storedBlogs);
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');
    if (storedUser?.email) setUserEmail(storedUser.email);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    window.location.href = '/auth';
  };

  const openCreateModal = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (id) => {
    const blog = blogs.find((b) => b.id === id);
    if (!blog) return;
    setTitle(blog.title);
    setContent(blog.content);
    setEditingId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setTitle('');
    setContent('');
    setEditingId(null);
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    if (editingId === null) {
      const newBlog = { id: Date.now(), title, content };
      setBlogs([newBlog, ...blogs]);
    } else {
      setBlogs(blogs.map((b) => (b.id === editingId ? { ...b, title, content } : b)));
    }
    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      setBlogs(blogs.filter((b) => b.id !== id));
      if (editingId === id) closeModal();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="flex justify-between items-center px-4 py-2 border-b bg-white">
        <h1 className="text-lg font-medium text-indigo-700">Admin Panel</h1>
        <button onClick={handleLogout} className="text-sm text-red-600 underline">Logout</button>
      </header>

      <main className="max-w-2xl mx-auto p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Blogs</h2>
          <button onClick={openCreateModal} className="px-3 py-1 text-sm bg-green-500 text-white rounded">New Blog</button>
        </div>

        {blogs.length === 0 ? (
          <p className="text-center text-sm text-gray-600 mt-6">No blogs available.</p>
        ) : (
          <ul className="space-y-4">
            {blogs.map((blog) => (
              <li key={blog.id} className="border p-3 rounded bg-white">
                <h3 className="text-base font-medium mb-1">{blog.title}</h3>
                <p className="text-sm text-gray-700 mb-2">
                  {blog.content.length > 80 ? blog.content.slice(0, 80) + '...' : blog.content}
                </p>
                <div className="flex gap-2">
                  <button onClick={() => openEditModal(blog.id)} className="text-sm text-blue-600 underline">Edit</button>
                  <button onClick={() => handleDelete(blog.id)} className="text-sm text-red-600 underline">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50" onClick={closeModal}>
          <form
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
            className="bg-white border p-4 w-full max-w-sm rounded"
          >
            <h2 className="text-base font-semibold mb-3">{editingId ? 'Edit Blog' : 'New Blog'}</h2>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full border p-2 mb-3 text-sm"
              required
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              rows={4}
              className="w-full border p-2 mb-3 text-sm"
              required
            />
            <div className="flex justify-end gap-2">
              <button type="button" onClick={closeModal} className="px-3 py-1 text-sm bg-gray-200">Cancel</button>
              <button type="submit" className="px-3 py-1 text-sm bg-blue-600 text-white">Save</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
