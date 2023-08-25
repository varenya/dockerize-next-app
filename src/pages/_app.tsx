import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RuntimeConfigProvider } from "@/context/app-config";
import { runtimeConfig } from "@/environment-config/runtime-config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RuntimeConfigProvider runtimeConfig={runtimeConfig}>
      <Component {...pageProps} />
    </RuntimeConfigProvider>
  );
}
