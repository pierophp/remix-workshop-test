import { ActionFunctionArgs, redirect } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export let loader = () => redirect("/login");

export let action = ({ request, context }: ActionFunctionArgs) => {
  return authenticator.authenticate("google", request, { context });
};
