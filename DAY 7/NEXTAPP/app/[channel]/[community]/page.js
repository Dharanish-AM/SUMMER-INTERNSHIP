const d = ({ params }) => {
  return (
    <div>
      <h1>Welcome to {params.channel} channel</h1>
      <h2>Community: hey {params.community}</h2>
      <h3>
        This is the {params.community} under the {params.channel}{" "}
        channel.
      </h3>
    </div>
  );
};
export default d;
