import { z } from "zod";

type RuntimeConfig = {
  variable1: string;
  variable2: string;
};

const runtimeConfigSchema = z.object({
  RUNTIME_VARIABLE_1: z.string().min(1),
  RUNTIME_VARIABLE_2: z.string().max(20),
});

// add new process env types to typedef

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof runtimeConfigSchema> {}
  }
}

const runtimeConfig: RuntimeConfig = {
  variable1: process.env.RUNTIME_VARIABLE_1,
  variable2: process.env.RUNTIME_VARIABLE_2,
};

// avoid running this on browser as process.env will be undefined there
if (typeof window === "undefined") {
  runtimeConfigSchema.parse(process.env);
}

export type { RuntimeConfig };

export { runtimeConfig };
