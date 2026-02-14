import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to?: string;
}
export function ServiceCard({
  title,
  description,
  icon,
  to = '/services'
}: ServiceCardProps) {
  const Content = () =>
  <div className="h-full p-6 border border-gray-200 bg-white hover:border-gray-400 hover:shadow-md transition-all duration-200 flex flex-col group">
      <div className="mb-4 p-3 bg-gray-50 w-fit rounded-lg text-gray-700 group-hover:bg-gray-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <div className="flex items-center text-sm font-medium text-gray-900 group-hover:translate-x-1 transition-transform">
        Learn more <ArrowRight className="ml-1 w-4 h-4" />
      </div>
    </div>;

  if (to) {
    return (
      <Link to={to} className="block h-full">
        <Content />
      </Link>);

  }
  return <Content />;
}