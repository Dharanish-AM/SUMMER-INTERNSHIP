"use client";
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";
const ChannelComp = () => {
  const params = useParams();
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const country= searchParams.get("country");

  return (
    <>
      <h1>My Params are : {parent.channel}</h1>
      <h2>My Community is : {params.community}</h2>
      <p>My Path is : {path}</p>
      <p>My Country is : {country}</p>
      <button
        onClick={() => {
          router.push("/myYooutubeChannel?country=India");
        }}
      >
        Click me! to the next page
      </button>
      <h1>The countryr name is :{country}</h1>
    </>
  );
};
export default ChannelComp;
