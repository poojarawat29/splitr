import { inngest } from "./client"; // your client file

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "app/hello" },
  async ({ event, step }) => {
    return { message: "Hello from Inngest!", event };
  }
);
