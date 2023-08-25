import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import {
  RuntimeConfig,
  runtimeConfig,
} from "@/environment-config/runtime-config";
import { buildTimeConfig } from "@/environment-config/build-time-config";
import { RuntimeConfigProvider, useRuntimeConfig } from "@/context/app-config";

function Variable({ keyStr, value }: { keyStr: string; value: string }) {
  return (
    <>
      <dt className="text-sm font-medium text-gray-900">{keyStr}</dt>
      <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
        {value}
      </dd>
    </>
  );
}

function RuntimeVariable1() {
  // now access in nested components as well
  const { variable1 } = useRuntimeConfig();
  return <Variable keyStr={"Runtime Variable 1"} value={variable1} />;
}

function RuntimeVariable2() {
  const { variable2 } = useRuntimeConfig();
  return <Variable keyStr={"Runtime Variable 2"} value={variable2} />;
}

export default function Home({
  runtimeConfig,
}: {
  runtimeConfig: RuntimeConfig;
}) {
  return (
    <RuntimeConfigProvider runtimeConfig={runtimeConfig}>
      <div className={"max-w-4xl mx-auto py-12"}>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-6 sm:px-6">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
              Environment Variables
            </h3>
          </div>
          <div className="border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <RuntimeVariable1 />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <RuntimeVariable2 />
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Build Time Variable
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {buildTimeConfig.appName}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </RuntimeConfigProvider>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      runtimeConfig,
    },
  };
}
