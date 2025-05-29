import React from 'react';

const FinancialModels2Page: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="gap-1 px-6 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-80">
            <div className="flex h-full min-h-[700px] flex-col justify-between bg-white p-4">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#111518] text-base font-medium leading-normal">FinEd</h1>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#111518]" data-icon="House" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M218.83,103.77l-80-75.48a1.14,1.14,0,0,1-.11-.11,16,16,0,0,0-21.53,0l-.11.11L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V160h32v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77ZM208,208H160V160a16,16,0,0,0-16-16H112a16,16,0,0,0-16,16v48H48V115.55l.11-.1L128,40l79.9,75.43.11.1Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#111518] text-sm font-medium leading-normal">Dashboard</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#111518]" data-icon="GraduationCap" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#111518] text-sm font-medium leading-normal">Learn</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#f0f3f4]">
                    <div className="text-[#111518]" data-icon="PresentationChart" data-size="24px" data-weight="fill">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM104,144a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#111518] text-sm font-medium leading-normal">Models</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#111518]" data-icon="Users" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#111518] text-sm font-medium leading-normal">Community</p>
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="text-[#111518]" data-icon="User" data-size="24px" data-weight="regular">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                        <path
                          d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"
                        ></path>
                      </svg>
                    </div>
                    <p className="text-[#111518] text-sm font-medium leading-normal">Profile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#111518] text-base font-bold leading-tight">TechCorp Financial Model</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">
                      Detailed financial projections for TechCorp, including revenue, expenses, and profitability analysis.
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
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0Ln2FN4AUzMm-rvSCqh8MJ1ik5TRSlzpywHJDfUdECDZ4gbtU5ExjGFJBWyhLAzcz2SE5K_hXhPn0MUF2f00GYdQBcqTnHT500NqzPOoidYOJNLvpbHFrExWxk2ueQ3343ZhUTH1pGU3reMNIi5nWY0QmFdA-BgchrDbkPPephi9lAKb3eXhZgE_NyAVpDUB-PdFgVuV0QgFbg_YQqjU1K-TsxMJyugtyzm4TxN-Xuvt2getbHm2M3hvlo95Rk8kv_AKJC3X6Q6g")' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#111518] text-base font-bold leading-tight">RetailCo Financial Model</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">
                      Comprehensive financial model for RetailCo, focusing on sales growth, cost management, and market trends.
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
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVtirCoqS0x0hFjKzFdM8wi4I-Z7VgmstsZsUJYeKmnQK0vDFab-CEbuTPrQdgUXLATtMKqSATRfiSrA-iQWP3jQ7_XKWYx-f_xA_MMvlV6lbFlVlGzLhMAFCz_hdRprqYQ9hxUp1qx2UYHiMZlGzLhMAFCz_hdRprqYQ9hxUp1qx2UYHiMZ5EiKEVhP0U3JkQPaws4LtdgUZZhEtlpUyRduLfH_rqpY1XaTEUmGg2vF0eZ47neOtEgTxb5JD2eAJpVPgwymFXtaVIYbSMmuhQExFwMu6AAhZTnCw8Iqn-MPdxs")' }}
                ></div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-stretch justify-between gap-4 rounded-lg">
                <div className="flex flex-[2_2_0px] flex-col gap-4">
                  <div className="flex flex-col gap-1">
                    <p className="text-[#111518] text-base font-bold leading-tight">HealthInc Financial Model</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">
                      In-depth financial analysis for HealthInc, covering revenue streams, operational costs, and future growth potential.
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
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBoO7g388LUrDB5jpr27GkJncZ3X52CBSbJKC74Q9iqG075ugpXBXOV3s2pB1PTR-ytxxqu6jLc1UCHhzv9xWjaIhUCjvxDHi9gCBxU87EvqCFddhC9rHxqR5KAFkGDJ3ZQCXkVFGWkp6DpimA0MuyT8avE9AzzkoMzd6AKnU-GElDvBO5FdemZ4Ew30s5GhgbUWeA4C7t1Wh91ZSGQZNTe_WBk4m38CGDHcg-XHm9oCS4lO1nmFqqiWcNyZNxCfPikoMCGBV2Hr3o")' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialModels2Page;
