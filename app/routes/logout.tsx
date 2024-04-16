import { LoaderFunctionArgs } from "@remix-run/cloudflare";
import { getAuthenticator } from "~/services/auth.server";

export async function loader({ request }: LoaderFunctionArgs) {
  await getAuthenticator().logout(request, { redirectTo: "/login" });
}
