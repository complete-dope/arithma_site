import React from 'react';
import FinancialModelsSidebar from '../components/FinancialModelsSidebar';
import FinancialModelCard from '../components/FinancialModelCard';
import financialModelsData from '../../public/mapping.json';

const FinancialModels2Page: React.FC = () => {
  const financialModels = financialModelsData.map(model => ({
    title: model.title,
    description: model.description,
    imageUrl: model.image_url,
    githubSheetLink: model.github_sheet_link,
  }));

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <FinancialModelsSidebar />
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4"><p className="text-[#111518] tracking-light text-[32px] font-bold leading-tight min-w-72">Financial Models</p></div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                  <div
                    className="text-[#637988] flex border-none bg-[#f0f3f4] items-center justify-center pl-4 rounded-l-lg border-r-0"
                    data-icon="MagnifyingGlass"
                    data-size="24px"
                    data-weight="regular"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    placeholder="Search for companies"
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#111518] focus:outline-0 focus:ring-0 border-none bg-[#f0f3f4] focus:border-none h-full placeholder:text-[#637988] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    value=""
                  />
                </div>
              </label>
            </div>
            <div className="pb-3">
              <div className="flex border-b border-[#dce1e5] px-4 gap-8">
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-[#111518] text-[#111518] pb-[13px] pt-4" href="">
                  <p className="text-[#111518] text-sm font-bold leading-normal tracking-[0.015em]">All</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637988] pb-[13px] pt-4" href="">
                  <p className="text-[#637988] text-sm font-bold leading-normal tracking-[0.015em]">My Models</p>
                </a>
                <a className="flex flex-col items-center justify-center border-b-[3px] border-b-transparent text-[#637988] pb-[13px] pt-4" href="">
                  <p className="text-[#637988] text-sm font-bold leading-normal tracking-[0.015em]">Featured</p>
                </a>
              </div>
            </div>
            {financialModels.map((model, index) => (
              <FinancialModelCard
                key={index}
                title={model.title}
                description={model.description}
                imageUrl={model.imageUrl}
                githubSheetLink={model.githubSheetLink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialModels2Page;
