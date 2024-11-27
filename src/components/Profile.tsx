import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter, 
  faDiscord, 
  faYoutube, 
  faInstagram 
} from '@fortawesome/free-brands-svg-icons';
import React from 'react';

const SocialLink: React.FC<{ href: string; icon: React.ReactNode }> = ({
  href,
  icon,
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-blue-600 transition-colors"
  >
    {icon}
  </a>
);

export const Profile: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <img src="/torclogonew1030.png" alt="Profile" className="w-24 h-24 rounded-full mx-auto mb2 shadow-lg"/>
      <p className="text-gray-300 text-center mb-1 text-2xl">
          torc.dev
        </p>
        <p className="text-gray-300 text-center mb-8">
        a community first career platform
        </p>
      <div className="flex justify-center gap-4">
        <SocialLink
          href="https://discord.gg/MaBfgaqvjR"
          icon={<FontAwesomeIcon icon={faDiscord} className="w-8 h-8" />}
        />
        <SocialLink
          href="https://www.linkedin.com/company/opentorc/"
          icon={<FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" />}
        />
        <SocialLink
          href="https://x.com/torcdotdev"
          icon={<FontAwesomeIcon icon={faTwitter} className="w-8 h-8" />}
        />
        <SocialLink
          href="https://www.youtube.com/@torcdotdev"
          icon={<FontAwesomeIcon icon={faYoutube} className="w-8 h-8" />}
        />
        <SocialLink
          href="https://www.instagram.com/torc.dev"
          icon={<FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />}
        />
        <SocialLink
          href="https://github.com/opentorc"
          icon={<FontAwesomeIcon icon={faGithub} className="w-8 h-8" />}
        />
      </div>
    </div>
  );
}
