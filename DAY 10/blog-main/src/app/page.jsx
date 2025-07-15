

'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <h1 className="text-3xl font-bold text-indigo-700 mb-4">Welcome to the Blog Platform</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        Create and share your thoughts easily. Admins can manage content, and users can read insightful blogs.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => router.push('/auth')}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Login / Signup
        </button>
        <button
          onClick={() => router.push('/user')}
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
        >
          View Blogs
        </button>
      </div>
    </div>
  );
}