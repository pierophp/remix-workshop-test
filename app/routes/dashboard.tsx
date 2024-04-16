import { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { getAuthenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Workshop - Dashboard" },
    {
      name: "description",
      content: "Workshop de Remix com Cloudflare!",
    },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  // If the user is already authenticated redirect to /dashboard directly
  let user = await getAuthenticator(context).isAuthenticated(request, {
    failureRedirect: "/login",
  });

  return {};
}

export default function Dashboard() {
  return <div>Dashboard</div>;
}
