import { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Form } from "@remix-run/react";
import { authenticator } from "~/services/auth.server";

export const meta: MetaFunction = () => {
  return [
    { title: "Workshop - Login" },
    {
      name: "description",
      content: "Workshop de Remix com Cloudflare!",
    },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
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
