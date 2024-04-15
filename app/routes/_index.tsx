import type { MetaFunction } from "@remix-run/cloudflare";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Workshop" },
    {
      name: "description",
      content: "Workshop de Remix com Cloudflare!",
    },
  ];
};

export default function Index() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              The fastest way to deploy your app
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Enter your email to get started with the platform that offers the best developer experience.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="space-y-2">
              <Input placeholder="Enter your email" required type="email" />
              <Button className="w-full" type="submit">
                Sign Up
              </Button>
            </form>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By clicking this button, you agree to the
              <Link className="underline underline-offset-2" to="https://google.com">
                Terms & Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
