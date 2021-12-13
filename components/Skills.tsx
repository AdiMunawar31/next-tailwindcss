import { FunctionComponent } from 'react';

import { Skill } from '../types';

const Skills: FunctionComponent<{ value: Skill }> = ({ value: { Icon, name } }) => {
  return (
    <div className="grid-cols-1 my-2">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-200 dark:bg-dark-100">
        <img src={Icon} className="w-14 h-14" alt={name} title={name} />
      </div>
    </div>
  );
};
export default Skills;
