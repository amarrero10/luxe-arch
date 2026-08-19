import { betterAuth, type BetterAuthOptions } from "better-auth";
import { nextCookies } from "better-auth/next-js";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { getClientPromise, getDb } from "./mongodb";

function resolveBaseURL(): string | undefined {
  if (process.env.BETTER_AUTH_URL) return process.env.BETTER_AUTH_URL;
  if (process.env.VERCEL_ENV === "production" && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return undefined;
}

async function createAuth() {
  const [db, client] = await Promise.all([getDb(), getClientPromise()]);

  return betterAuth({
    database: mongodbAdapter(db, { client, transaction: false }),
    secret: process.env.BETTER_AUTH_SECRET,
    baseURL: resolveBaseURL(),
    emailAndPassword: {
      enabled: true,
    },
    plugins: [nextCookies()],
  } satisfies BetterAuthOptions);
}

type AuthInstance = Awaited<ReturnType<typeof createAuth>>;

declare global {
  var _authPromise: Promise<AuthInstance> | undefined;
}

export function getAuth(): Promise<AuthInstance> {
  if (!global._authPromise) {
    global._authPromise = createAuth();
  }
  return global._authPromise;
}
