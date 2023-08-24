type RuntimeConfig = {
  variable1: string;
  variable2: string;
};
const runtimeConfig: RuntimeConfig = {
  variable1: process.env.RUNTIME_VARIABLE_1!,
  variable2: process.env.RUNTIME_VARIABLE_2!,
};

export type { RuntimeConfig };

export { runtimeConfig };
