import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function page() {
  return (
    <div className="items-center justify-items-center min-h-screen">
      <div className="py-8 space-y-2">
        <h1 className="text-slate-900 text-3xl">Welcome to Blogs</h1>
        <Input />
      </div>

      <ScrollArea className="h-full w-1/2 rounded-md border p-4">
        Jokester began sneaking into the castle in the middle of the night and
        leaving jokes all over the place: under the king's pillow, in his soup,
        even in the royal toilet. The king was furious, but he couldn't seem to
        stop Jokester. And then, one day, the people of the kingdom discovered
        that the jokes left by Jokester were so funny that they couldn't help
        but laugh. And once they started laughing, they couldn't stop.
      </ScrollArea>
      <Link href={"../"}>
        <Button>Return to home</Button>
      </Link>
    </div>
  );
}
