'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main style={{ textAlign: 'center', padding: '1rem' }}>
      <h2>Marketplace</h2>
      <p>Choose login type:</p>

      <div style={{ marginTop: '1rem' }}>
        <Link href="/buyer/login">
          <button style={{ padding: '0.5rem 1rem', margin: '0.25rem', background: '#007bff', color: 'white', border: 'none' }}>
            Buyer
          </button>
        </Link>
        <Link href="/seller/login">
          <button style={{ padding: '0.5rem 1rem', margin: '0.25rem', background: '#28a745', color: 'white', border: 'none' }}>
            Seller
          </button>
        </Link>
      </div>
    </main>
  );
}
