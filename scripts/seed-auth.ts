import { getAuth } from "../src/lib/auth";

const DEMO_EMAIL = "agent@luxearch.demo";
const DEMO_PASSWORD = "LuxeArchDemo2026!";
const DEMO_NAME = "Sarah Jenkins";

async function main() {
  const auth = await getAuth();
  try {
    await auth.api.signUpEmail({
      body: {
        email: DEMO_EMAIL,
        password: DEMO_PASSWORD,
        name: DEMO_NAME,
      },
    });
    console.log(`Created demo agent account: ${DEMO_EMAIL}`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (message.toLowerCase().includes("already exists") || message.toLowerCase().includes("already registered")) {
      console.log(`Demo agent account already exists: ${DEMO_EMAIL}`);
    } else {
      throw err;
    }
  }
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
