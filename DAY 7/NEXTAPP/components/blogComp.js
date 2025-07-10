'use client';
import { useParams, usePathname, useSearchParams, useRouter } from "next/navigation";

const blogComp = () => {
    return (
        <div>
            <h1>Blog Page</h1>
            {Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
                <a key={el} href={`/blog/${el}`}>
                    Blog Post {el}
                </a>
            ))}
        </div>
    );
}
export default blogComp;