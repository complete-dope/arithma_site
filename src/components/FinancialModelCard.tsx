import React from 'react';

interface FinancialModelCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FinancialModelCard: React.FC<FinancialModelCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="p-4">
      <div className="flex items-stretch justify-between gap-4 rounded-lg">
        <div className="flex flex-[2_2_0px] flex-col gap-4">
          <div className="flex flex-col gap-1">
            <p className="text-[#111518] text-base font-bold leading-tight">{title}</p>
            <p className="text-[#637988] text-sm font-normal leading-normal">
              {description}
            </p>
          </div>
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-8 px-4 flex-row-reverse bg-[#f0f3f4] text-[#111518] text-sm font-medium leading-normal w-fit"
          >
            <span className="truncate">View Model</span>
          </button>
        </div>
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
      </div>
    </div>
  );
};

export default FinancialModelCard;