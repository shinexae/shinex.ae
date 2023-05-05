interface IconInterface {
  icon: string;
  title: string;
  description?: string;
  cta?: any;
  hStyle?: string;
  roundedIcon?: boolean;
}

interface ServiceInterface {
  image: string;
  title: string;
  description: string;
  packages: any;
  setPackage?: any;
}

interface LinkProps {
  name: string;
  url: string;
  image: string;
}

interface ReviewProps {
  title: string;
  stars: number;
  description: string;
  author: string;
}

interface PackageProps {
  title: string;
  menu: string[];
  prices: {
    sm: number;
    lg: number;
  };
  type?: string;
}
