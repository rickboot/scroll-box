import React from 'react';
import ScrollBoxCard from './ScrollBoxCard';

import { boxData } from './data';

export default function ScrollBoxes() {
  return (
    <div className='flex flex-col gap-y-8'>
      {boxData.map((box, index: number) => (
        <div key={index + box.title}>
          <ScrollBoxCard {...box} />
        </div>
      ))}
    </div>
  );
}
