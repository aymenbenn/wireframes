import React from 'react';
interface AnnotationNoteProps {
  text: string;
  position?: 'left' | 'right' | 'bottom';
  className?: string;
}
export function AnnotationNote({
  text,
  position = 'right',
  className = ''
}: AnnotationNoteProps) {
  return (
    <div
      className={`hidden lg:flex flex-col max-w-[200px] absolute z-10 ${className} 
      ${position === 'right' ? '-right-64 top-0' : ''}
      ${position === 'left' ? '-left-64 top-0' : ''}
      ${position === 'bottom' ? '-bottom-24 left-0' : ''}
    `}>

      <div className="text-xs italic text-blue-600 bg-blue-50 p-2 rounded border border-blue-100 shadow-sm">
        <span className="font-bold not-italic mr-1">Note:</span>
        {text}
      </div>
      {/* Connector line visual could go here, but keeping it simple for now */}
    </div>);

}