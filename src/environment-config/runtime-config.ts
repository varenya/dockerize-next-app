type RuntimeConfig = {
  variable1: string;
  variable2: string;
};

// add new process env types to typedef

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      RUNTIME_VARIABLE_1: string;
      RUNTIME_VARIABLE_2: string;
    }
  }
}

const runtimeConfig: RuntimeConfig = {
  variable1: process.env.RUNTIME_VARIABLE_1,
  variable2: process.env.RUNTIME_VARIABLE_2,
};

export type { RuntimeConfig };

export { runtimeConfig };
