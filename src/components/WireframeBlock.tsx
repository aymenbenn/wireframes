import React from 'react';
import { cn } from '../lib/utils'; // Assuming a utility exists, or I'll implement a simple one inline if not found. I'll stick to standard template literals for safety.
interface WireframeBlockProps {
  label?: string;
  height?: string;
  dashed?: boolean;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}
export function WireframeBlock({
  label = 'Placeholder',
  height = 'h-64',
  dashed = true,
  icon,
  className = '',
  children
}: WireframeBlockProps) {
  return (
    <div
      className={`
        w-full bg-gray-50 flex flex-col items-center justify-center text-gray-400 p-4
        ${dashed ? 'border-2 border-dashed border-gray-300' : 'border border-gray-200'}
        ${height}
        ${className}
      `}>

      {children ?
      children :

      <>
          {icon && <div className="mb-2 text-gray-300">{icon}</div>}
          <span className="text-sm font-medium uppercase tracking-wider">
            {label}
          </span>
        </>
      }
    </div>);

}