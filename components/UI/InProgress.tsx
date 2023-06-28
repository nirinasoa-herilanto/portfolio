import React from 'react';
import { FcSettings } from 'react-icons/fc';

/**
 * Use to display on UI, that it is in progress status
 */
const InProgress = () => {
  return (
    <div className="p-2 text-slate-950 flex items-center gap-2 bg-yellow-500">
      <FcSettings />
      {' In progress'}
    </div>
  );
};

export default InProgress;
