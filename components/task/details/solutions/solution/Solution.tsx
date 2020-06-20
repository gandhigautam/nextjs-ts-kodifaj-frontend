import React from 'react';
import { Solution } from 'lib/models/solution/solution';
import Badges from 'components/badges/Badges';
import { FaGithub } from 'react-icons/fa';
import { MdLiveTv } from 'react-icons/md';
import clsx from 'clsx';

export enum SolutionDetailsLayout {
  Default = 'DEFAULT',
  WithTitle = 'TITLE',
}
interface SolutionProps {
  solution: Solution;
  layout?: SolutionDetailsLayout;
}

const SolutionDetails: React.FC<SolutionProps> = ({
  solution,
  layout = SolutionDetailsLayout.Default,
}) => {
  const {
    _user: { photo, login },
    _task: { title },
    createdAt,
    technologies,
  } = solution;

  const TitleStyles = clsx(
    layout === SolutionDetailsLayout.Default ? 'hidden' : 'mt-2 mb-4 text-center text-blue-700',
  );

  return (
    <section className="w-full max-w-screen-sm border border-gray-400 rounded-md flex flex-col px-2 py-4 relative bg-white shadow-xs my-2">
      <div className="flex items-center justify-between mb-4 mt-4">
        <p className="text-sm underline italic">{createdAt}</p>
        <div className="-mt-4">
          <Badges tags={technologies} />
        </div>
      </div>
      <h4 className={TitleStyles}>{title}</h4>
      <div className="flex justify-center md:justify-between items-center">
        <img
          src={photo}
          alt={`${login} photo`}
          className="w-5 md:w-8 h-5 md:h-8 rounded-full mr-8 absolute top-0 left-0 ml-2 mt-2 md:mt-0 md:static "
        />
        <div className="w-full flex justify-around md:justify-end ">
          <a
            href="/"
            className="w-32 flex justify-between items-center border-gray-400 border rounded-md p-1 text-sm md:mx-4 hover:underline"
          >
            <FaGithub className="w-6 h-6 mr-2" />
            Kod źródłowy
          </a>
          <a
            href="/"
            className="w-32 flex w-14 justify-between items-center border-gray-400 border rounded-md p-1 text-sm hover:underline"
          >
            <MdLiveTv className="w-6 h-6 mr-2" />
            Wersja live
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionDetails;
