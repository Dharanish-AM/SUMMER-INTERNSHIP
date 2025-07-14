// "use client"
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from "next/link"
// export default function Dashboard() {
//     const router=useRouter();
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       console.log('3 seconds passed');
// //     }, 3000);

// //     return () => clearTimeout(timer);
// //   }, []);
// const handlenavigate=()=>{
//     setTimeout(()=>{
//         router.push("/login");
//     },3000)
// }
//   return (
//     <div>
//     <button onClick={handlenavigate}>Click me</button>
//     <Link href="/login">Link</Link>
//   <div>This is Dashboard page</div>
//   </div>
// );
// }
"use client"
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from 'next/image';

export default function Dashboard() {
  const router = useRouter();

  const handlenavigate = () => {
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f4f8',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#333',
      padding: '20px'
    }}>
      <button 
        onClick={handlenavigate} 
        style={{
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          color: 'white',
          backgroundColor: '#0070f3',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'background-color 0.3s ease'
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#005bb5'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#0070f3'}
      >
        Click me
      </button>

      <Link href="/login" style={{ 
        marginTop: '20px', 
        fontSize: '18px', 
        color: '#0070f3', 
        textDecoration: 'underline',
        cursor: 'pointer'
      }}>
        Go to Login
      </Link>

      <div style={{ marginTop: '40px', fontSize: '20px' }}>
        This is Dashboard page
      </div>

      <Image alt='img' height={20} width={20} src={"/vercel.svg"} />
    </div>
  );
}