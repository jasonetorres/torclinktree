import { ExternalLink } from 'lucide-react';
import React from 'react';

interface LinkCardProps {
  title: string;
  url: string;
  description?: string;
}

export const LinkCard: React.FC<LinkCardProps> = ({ title, url, description }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 flex items-center justify-between group"
    >
      <div>
        <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
    </a>
  );
}