import { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description?: string;
  details?: string[];
  listType?: 'disc' | 'decimal';
  icon: LucideIcon;
  linkText: string;
  extraInfo?: string[];
  themeColor: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface NavItem {
  label: string;
  href: string;
}