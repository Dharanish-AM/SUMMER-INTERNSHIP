const d = ({ params }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'skyblue',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <h1
        style={{
          color: 'blue',
          fontSize: '2.5rem',
          marginBottom: '1rem',
        }}
      >
        my channel {params.channel}
      </h1>
    </div>
  );
};

export default d;