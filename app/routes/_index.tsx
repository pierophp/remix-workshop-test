import type { MetaFunction } from "@remix-run/cloudflare";

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
    <div>
      <h1 className="text-3xl font-bold text-blue-500">Bem-vindo ao Workshop!</h1>
    </div>
  );
}
