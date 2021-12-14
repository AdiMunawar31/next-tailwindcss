import { FunctionComponent } from 'react';
import Image from 'next/image';
import { Skill } from '../types';

const Skills: FunctionComponent<{ value: Skill }> = ({ value: { Icon, name } }) => {
  return (
    <div className="grid-cols-1 my-2">
      <div className="flex items-center justify-center w-20 h-20 bg-gray-200 dark:bg-dark-100">
        <Image src={Icon} width="14" height="14" layout="intrinsic" alt={name} title={name} />
      </div>
    </div>
  );
};
export default Skills;
