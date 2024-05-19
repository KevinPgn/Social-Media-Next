import { createSafeActionClient } from "next-safe-action";
import { auth } from "./auth";

export const action = createSafeActionClient();

export class ActionError extends Error {}

export const authenticatedAction = createSafeActionClient({
  async middleware() {
    const session = await auth()

    if (!session?.user?.id) {
      throw new Error("Invalid session")
    }

    return {
      userId: session?.user?.id
    }
  }
})