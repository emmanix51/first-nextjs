import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Welcome to my first NextJs Website
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                this is a simple blog site.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href={"/blog"}>
                <Button>Click to go to blog page</Button>
                </Link>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
