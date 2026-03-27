import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
export function Breadcrumb() {
  return (
    <div className="w-full flex items-center py-4 text-sm font-poppins text-muted">
      <div className="flex items-center hover:text-primary cursor-pointer transition-colors">
        <Home className="w-4 h-4 mr-1" />
        <span>Home</span>
      </div>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
      <span className="hover:text-primary cursor-pointer transition-colors">
        Koelen & Vriezen
      </span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
      <span className="hover:text-primary cursor-pointer transition-colors">
        Koeltoonbanken
      </span>
      <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
      <span className="font-semibold text-gray-700">
        Koeltoonbanken | Koeltogen
      </span>
    </div>);

}