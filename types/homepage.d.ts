interface IconInterface {
  icon: string;
  title: string;
  description?: string;
  cta?: any;
  hStyle?: string;
  roundedIcon?: boolean;
  footer?: boolean;
  ctaWithoutBtn?: boolean;
}

interface ServiceInterface {
  image: string;
  title: string;
  url: string;
  description: string;
  packages: any;
  ctaText?: string;
}

interface LinkProps {
  name: string;
  url: string;
  image: string;
  className?: string;
}

interface ReviewProps {
  title: string;
  stars: number;
  description: string;
  author: string;
}

interface PackageProps {
  id: number;
  title: string;
  menu: string[];
  prices: {
    sm: number;
    lg: number;
  };
  type?: string;
}
