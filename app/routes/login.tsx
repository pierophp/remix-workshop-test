import { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { getAuthenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Workshop - Login" },
    {
      name: "description",
      content: "Workshop de Remix com Cloudflare!",
    },
  ];
};

export async function loader({ request, context }: LoaderFunctionArgs) {
  await getAuthenticator(context).isAuthenticated(request, {
    successRedirect: "/dashboard",
  });

  return {};
}

export default function Login() {
  return (
    <Form action="/auth/google" method="post">
      <button type="submit">Login with Google</button>
    </Form>
  );
}
