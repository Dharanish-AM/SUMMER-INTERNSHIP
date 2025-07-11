export default function BuyerLayout({ children }) {
  return (
    <div>
      <nav style={{ background: "#e0f7fa", padding: "1rem" }}>
        <a href="/buyer/login">Buyer Login</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}
