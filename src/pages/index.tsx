import { env } from "@/env.mjs";
import Head from "next/head";

type RuntimeConfig = {
  variable1: string;
  variable2: string;
};

export default function Home({
  runtimeConfig,
}: {
  runtimeConfig: RuntimeConfig;
}) {
  return (
    <>
      <Head>
        <title>{env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
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
                <dt className="text-sm font-medium text-gray-900">
                  Runtime Variable 1
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {runtimeConfig.variable1}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Runtime Variable 2
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {runtimeConfig.variable2}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">
                  Build Time Variable
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {env.NEXT_PUBLIC_APP_NAME}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      runtimeConfig: {
        variable1: env.RUNTIME_VARIABLE_1,
        variable2: env.RUNTIME_VARIABLE_2,
      },
    },
  };
}
