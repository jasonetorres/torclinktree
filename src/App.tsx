//import React from 'react';
import { LinkCard } from './components/LinkCard';
import { Profile } from './components/Profile';
import { links } from './data/links';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-16">
        <Profile />
        <div className="space-y-5">
          {links.map((link, index) => (
            <LinkCard
              key={index}
              title={link.title}
              url={link.url}
              description={link.description}
            />
          ))}
        </div>   
            
        <footer className="mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} <a href="https://www.torc.dev/" className="text-blue-500 hover:underline">Torc.dev</a> X Jason Torres All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;