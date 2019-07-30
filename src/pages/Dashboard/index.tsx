import React from 'react';

// Custom components
import { SubHeader } from '~/components';

export default function Dashboard() {
  return (
    <div>
      <SubHeader title="Dashboard" Links={[{ text: 'teste', to: '/' }]} />
    </div>
  );
}
