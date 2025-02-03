import Link from 'next/link';
import React from 'react';

const Projects: React.FC = () => {
  React.useEffect(() => {
    window.location.href = '/';
  }, []);
  return (
    <div>
      <h1>Projects</h1>
      <p>The page has been moved <Link href={'/'}>here</Link>.</p>
    </div>
  );
};

export default Projects;