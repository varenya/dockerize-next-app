import React, { useContext } from "react";
import { RuntimeConfig } from "@/environment-config/runtime-config";

const RuntimeConfigContext = React.createContext<RuntimeConfig | null>(null);

function RuntimeConfigProvider({
  children,
  runtimeConfig,
}: {
  children: React.ReactNode;
  runtimeConfig: RuntimeConfig;
}) {
  return (
    <RuntimeConfigContext.Provider value={runtimeConfig}>
      {children}
    </RuntimeConfigContext.Provider>
  );
}

function useRuntimeConfig() {
  const context = useContext(RuntimeConfigContext);
  if (context === null) {
    throw new Error(
      "Wrap the component in RuntimeConfigProvider with proper config",
    );
  }
  return context;
}

export { RuntimeConfigProvider, useRuntimeConfig };
