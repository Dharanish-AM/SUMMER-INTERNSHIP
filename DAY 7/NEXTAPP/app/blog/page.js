import link from "next/link";
import bolgcomp from "@/components/blogComp";
const blog = () => {
  let a = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Blog Page</h1>
      {a.map((el) => {
        <link key={el} href={"/blog/${el}"}></link>;
      })}
      {a.map((el) => (
        <link key={el} href={`/blog/${el}`}>
          Blog Post {el}
        </link>
      ))}
      <bolgcomp></bolgcomp>
      <link href="/blog/1">Blog Post 1</link>
      <link href="/blog/2">Blog Post 2</link>
      <link href="/blog/3">Blog Post 3</link>
      <link href="/blog/4">Blog Post 4</link>
      <link href="/blog/5">Blog Post 5</link>
  
    </div>
  );
};

export default blog;
