import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { authenticator } from "~/services/auth.server";

export let loader = ({ request, context }: LoaderFunctionArgs) => {
  return authenticator.authenticate("google", request, {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    context,
  });
};
