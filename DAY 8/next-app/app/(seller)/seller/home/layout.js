export default function SellerLayout({ children }) {
  return (
    <div>
      <nav style={{ background: "#f3e5f5", padding: "1rem" }}>
        <a href="/seller/home" style={linkStyle}>Seller Home</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#6a1b9a",
  fontWeight: "bold",
};
