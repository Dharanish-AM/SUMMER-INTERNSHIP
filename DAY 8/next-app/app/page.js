'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Welcome to the Marketplace</h1>
      <p>Select Buyer or Seller from the navigation.</p>

      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link href="/buyer/login">
          <button style={buttonStyle}>Buyer</button>
        </Link>
        <Link href="/seller/login">
          <button style={buttonStyle}>Seller</button>
        </Link>
      </div>
    </main>
  );
}

const buttonStyle = {
  padding: '0.8rem 2rem',
  fontSize: '1rem',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#0070f3',
  color: 'white',
  cursor: 'pointer',
};
