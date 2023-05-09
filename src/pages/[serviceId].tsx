import PackagesList from "@/components/PackagesList";
import site from "@/lib/companyInfo";
import { services } from "@/lib/homepage";
import Head from "next/head";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticPaths = async ({ locales }: { locales: string[] }) => {
  const paths = services.flatMap((_service) => {
    return locales.map((locale) => {
      return {
        params: {
          serviceId: _service.title.toLowerCase(),
        },
        locale: locale,
      };
    });
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  locale,
  params: { serviceId },
}: {
  locale: string;
  params: { serviceId: string };
}) => {
  const servicePackages = services.find(
    (service) => service.title.toLowerCase() === serviceId
  );

  return {
    props: {
      servicePackages,
      ...(await serverSideTranslations(locale, ["common", "washing"])),
    },
  };
};

const ServicePage = ({
  servicePackages,
}: {
  servicePackages: ServiceInterface;
}) => {
  const title = `${servicePackages.title.toString()} | ${site.name}`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PackagesList
        title={servicePackages.title}
        packages={servicePackages.packages}
      />
    </>
  );
};

export default ServicePage;
