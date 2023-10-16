import { FC } from 'react';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  // read all entities
  fetch('https://swift-fragrant-deer.glitch.me/departments/list', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log('dave');
      console.log(err);
    });

  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>Start editing to see some magic happen1asd :)</p>
    </div>
  );
};

// https://api.artic.edu/api/v1/artworks/search?q=cats
