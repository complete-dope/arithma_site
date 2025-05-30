import React from 'react';
import FinancialModelsSidebar from '../components/FinancialModelsSidebar';
import FinancialModelCard from '../components/FinancialModelCard';

const FinancialModels2Page: React.FC = () => {
  const financialModels = [
    {
      title: 'TechCorp Financial Model',
      description: 'Detailed financial projections for TechCorp, including revenue, expenses, and profitability analysis.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ln2FN4AUzMm-rvSCqh8MJ1ik5TRSlzpywHJDfUdECDZ4gbtU5ExjGFJBWyhLAzcz2SE5K_hXhPn0MUF2f00GYdQBcqTnHT500NqzPOoidYOJNLvpbHFrExWxk2ueQ3343ZhUTH1pGU3reMNIi5nWY0QmFdA-BgchrDbkPPephi9lAKb3eXhZgE_NyAVpDUB-PdFgVuV0QgFbg_YQqjU1K-TsxMJyugtyzm4TxN-Xuvt2getbHm2M3hvlo95Rk8kv_AKJC3X6Q6g',
    },
    {
      title: 'RetailCo Financial Model',
      description: 'Comprehensive financial model for RetailCo, focusing on sales growth, cost management, and market trends.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAVtirCoqS0x0hFjKzFdM8wi4I-Z7VgmstsZsUJYeKmnQK0vDFab-CEbuTPrQdgUXLATtMKqSATRfiSrA-iQWP3jQ7_XKWYx-f_xA_MMvlV6lbFlVlGzLhMAFCz_hdRprqYQ9hxUp1qx2UYHiMZlGzLhMAFCz_hdRprqYQ9hxUp1qx2UYHiMZ5EiKEVhP0U3JkQPaws4LtdgUZZhEtlpUyRduLfH_rqpY1XaTEUmGg2vF0eZ47neOtEgTxb5JD2eAJpVPgwymFXtaVIYbSMmuhQExFwMu6AAhZTnCw8Iqn-MPdxs',
    },
    {
      title: 'HealthInc Financial Model',
      description: 'In-depth financial analysis for HealthInc, covering revenue streams, operational costs, and future growth potential.',
      imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoO7g388LUrDB5jpr27GkJncZ3X52CBSbJKC74Q9iqG075ugpXBXOV3s2pB1PTR-ytxxqu6jLc1UCHhzv9xWjaIhUCjvxDHi9gCBxU87EvqCFddhC9rHxqR5KAFkGDJ3ZQCXkVFGWkp6DpimA0MuyT8avE9AzzkoMzd6AKnU-GElDvBO5FdemZ4Ew30s5GhgbUWeA4C7t1Wh91ZSGQZNTe_WBk4m38CGDHcg-XHm9oCS4lO1nmFqqiWcNyZNxCfPikoMCGBV2Hr3o',
    },
  ];

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
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialModels2Page;
