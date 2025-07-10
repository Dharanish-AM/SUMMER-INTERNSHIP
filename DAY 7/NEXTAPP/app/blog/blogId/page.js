import blogComp from "@/components/blogComp";
const blockid = ({ params }) => {
  return (
    <div>
      <h1>{params.blockid}</h1>
      <blogcomp></blogcomp>
    </div>
  );
};
