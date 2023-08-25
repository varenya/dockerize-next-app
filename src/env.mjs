import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    server : {
        RUNTIME_VARIABLE_1: z.string().min(1),
        RUNTIME_VARIABLE_2: z.string().min(1),
    },
    client: {
        NEXT_PUBLIC_APP_NAME: z.string().min(1),
    },
    runtimeEnv: {
        RUNTIME_VARIABLE_1: process.env.RUNTIME_VARIABLE_1,
        RUNTIME_VARIABLE_2: process.env.RUNTIME_VARIABLE_2,
        NEXT_PUBLIC_APP_NAME: process.env.NEXT_PUBLIC_APP_NAME
    },
});