import site from "@/lib/companyInfo";
import Image from "next/image";
import CTA from "./CTA";
import Link from "next/link";
import { useRouter } from "next/router";

const IconElement = ({
  icon,
  title,
  description,
  cta,
  hStyle,
  roundedIcon,
  footer,
}: IconInterface) => {
  const { locale } = useRouter();

  const Container = (props: any) =>
    footer ? (
      <Link locale={locale} href={cta} {...props}>
        {props.children}
      </Link>
    ) : (
      <div {...props}>{props.children}</div>
    );

  return (
    <Container
      className={`flex scale-100 hover:scale-100  flex-col items-center gap-2 lg:gap-4 !bg-transparent ${
        footer ? "!p-0" : "text-secondary"
      }`}>
      <Image
        src={icon}
        width={48}
        height={48}
        alt={`${title} icon`}
        className={
          roundedIcon
            ? "p-4 lg:p-3 border-[1.5px] border-white rounded-full overflow-hidden"
            : ""
        }
      />
      <p className={`text-base lg:text-xl font-bold m-0 ${hStyle}`}>{title}</p>
      {description ? (
        <p className=' text-sm opacity-80 text-center'>{description}</p>
      ) : null}
      {!footer && cta ? <CTA /> : null}
    </Container>
  );
};
export default IconElement;
