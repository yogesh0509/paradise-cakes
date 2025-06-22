import { Category } from "@/lib/data";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number | string;
  images: string[];
  category: Category;
  featured?: boolean;
  customizable?: boolean;
  quantity?: string;
  seasonal?: boolean;
};

export type NavigationItem = {
  name: string;
  href: string;
  current?: boolean;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

