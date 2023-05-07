import PackagesList from "@/components/PackagesList";
import { services } from "@/lib/homepage";

export const getStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: {
      serviceId: service.title.toLowerCase(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { serviceId } }: any) => {
  console.log(serviceId);

  const servicePackages = services.find(
    (service) => service.title.toLowerCase() === serviceId
  );

  return {
    props: { servicePackages },
  };
};

const ServicePage = ({
  servicePackages,
}: {
  servicePackages: ServiceInterface;
}) => {
  return (
    <PackagesList
      title={servicePackages.title}
      packages={servicePackages.packages}
    />
  );
};

export default ServicePage;
