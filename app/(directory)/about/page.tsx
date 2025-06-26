import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// import TestFirestore from "@/components/TestFirestore";

export default function page() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="py-8 space-y-2 text-center h-full w-1/2">
        <h1 className="text-slate-900 text-3xl ">About Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
          laboriosam minus est doloremque dolorum deserunt veniam voluptatibus
          quas dignissimos rem sequi repellendus perspiciatis ea aliquam ad
          beatae, ut, nam nostrum facilis quis modi neque deleniti dolor cum?
          Sint tempore voluptate assumenda, obcaecati magnam alias distinctio
          quos voluptatibus delectus sit ratione rem veniam, eligendi magni
          mollitia, dicta tempora in? Iste reiciendis, nemo rem deleniti nam ea
          quasi, molestiae, dolore inventore distinctio rerum? Quibusdam
          consequuntur ipsam, dicta asperiores sed rerum ad earum id ratione
          ullam doloribus voluptatem dolore soluta quas similique rem,
          aspernatur illo dolorum cum aut. Aliquid assumenda ratione dolores at,
          consequuntur nemo consequatur beatae placeat accusamus ullam, rerum
          odio minus dolore aut illum sapiente ex! Quaerat, est a excepturi
          dolores enim voluptatem ut voluptate. Accusantium nam nostrum vero
          ullam quasi.
        </p>
      </div>

      <Link href={"../"}>
        <Button>Return to home</Button>
      </Link>

      {/* <TestFirestore /> */}
    </div>
  );
}
