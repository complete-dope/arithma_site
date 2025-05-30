import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-white group/design-root overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:p-4">
                <div
                  className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
                  style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/src/assets/arithma.jpg")' }}
                >
                  <div className="flex flex-col gap-2 text-left">
                    <h1
                      className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
                    >
                      Level Up Your Financial Game
                    </h1>
                    <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                      Unlock the secrets to financial success with our easy-to-use models, insightful blog, and engaging video content. Start your journey to financial freedom
                      today!
                    </h2>
                  </div>
                  <button
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1993e5] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]"
                  >
                    <span className="truncate">Get Started</span>
                  </button>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Explore Our Financial Models</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB5XdsDUh0xw5QDhtA4Jgf0_zogIR0w1J-UmzZhenMxqnfHcmoEXqS8Y8nMIAw9EnkAAKng8JScBwOOR5CAFh_iIVrmhoj0NRqHaO13RlQrPEEahAbSvdlhKydWmRAM4baHIM1autN3whS0uvCWucO5O1n2kN_0lKw9OWHbwTNm_eI_0Rv2YTyXX-wvoYqLpOxhRTYGIliKyZXCsP4WKrIAtcKiLBPH8tS2kSrURQWIdWeX98XmlsoNOVA_vIRCr92qa2TsrXUMryE")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">Budgeting Basics</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Create a personalized budget to track your spending and savings.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC2ChF0CetbktXvB3KUMuB7b98Lhg0fSwLhg2dLtPiftIVOHSu1XwSD8Z3ZTDXi9vIvSVrO-O7yMuADDqfFeafwkM6nF8YjW5_6vDSFq1Dmv561cmYaPgdvvua6QQ0xEIpBpNr8XRdQU2fGpEczdXJVArLO2dumTsUa6ld61JPomMJlRbmKp38kHhy3LNkVuk05mcRza7TKsNbFsqQipUgnvtxEB_T6kLRnjEjB552SjvWMOkDfYvqFpdQhbVVMMhRpYgyHK3qVj5w")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">Investment Strategies</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Learn how to build a diversified investment portfolio for long-term growth.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4cf0c8_Vy0q7excd7r9jnd9u6-kE6Xcho4ZZ68Khd3AoW7QSTZ6Q9XZN8CZfmGJ31DY9nQfD0bmfs8dMjyyUzjHuoHyMsahOsip94EvTtN_rc0XHJAOvie2hzxLezxJsOoCD3q_UwTC36lSQzFIbYZpH9563Ico6V4flzmPo9npW5ezAo5m5z3WgLMMK7kzcd73I9XLWHRsPZR-84jo-lzsDKnnWM8_Jz3SswPEx3fNOA27yA7zIXIAtO_Kkajjtw3hJ9TldMAXA")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">Debt Management</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Develop a plan to pay off your debts and improve your credit score.</p>
                  </div>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Featured Blog Posts</h2>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBDqwY_3WneRn8dCJGqQZ6AO68axPTZ5ijpR3vALEhnaQ4eVNwFdvViEU0YecDzqlYa5YeSKugxcZ87oKpu9N0SIGkRogyIU3aabaPbdT3ZwJnymNWrpCGVwYaUH-bmHYOELEIpAMMXxjUA2pQYyqX8yRlUUK_6c9_uAAL7cPXPSClU30yYbsBFgPex9pDj4g709NRM9xYBi5kh8zhi64ldxw3DUhP3XvAC4jJsRe2wKFFKECe40SLGXa7-veEpiFiqXQGAHPAfCRA")' }}
                ></div>
                <div>
                  <p className="text-[#111518] text-base font-medium leading-normal">The Ultimate Guide to Saving for a Down Payment</p>
                  <p className="text-[#637988] text-sm font-normal leading-normal">Learn how to save effectively for your dream home.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAnnDyqX-Iq8iOUoh1xQKkGiEaWQKJTnpzB8r_mLMAjILgXxl3auUXiTqr-xapzGizraLf5O8DSWwcH4-VL6k-mTooQZilVGdlIPmqXU3A-zSIuLg83aLHm2MrnxBr8EEg09f9g31X07oEBwWvgLuvIRKyLMG1XDjFXs_8cTFK9BX34a1T_IjaeQtsqVBwCH6UhSADzriqctydOgaGWHyaYODWUkwUkycQ9uZsm8kyEAc1N-fgGNSX3Ns38VFnph38Ox6r45U_RLMo")' }}
                ></div>
                <div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Investing in Cryptocurrency: Risks and Rewards</p>
                  <p className="text-[#637988] text-sm font-normal leading-normal">Understand the potential benefits and risks of investing in digital currencies.</p>
                </div>
              </div>
              <div className="flex flex-col gap-3 pb-3">
                <div
                  className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg"
                  style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLtZymNwr-OK2pk8s0W8_UzYjid8A68fsxOBXwgkQhDBQAA2UFZHfik-gMJJO7KYgN2-mGY7EHJ51VhYuH_Dv0pxN92iVfpfTPhQYt9Cfgfl_nvGNWBiySpW8uU3QEZC-pq0bgJpwOAUv1jYzzD79GO350876S9r2PgeM_WflrCNs1UXuQI0GdtaMjOOWDyMDL6yA10K4Io7hY58K9lmr8bKlQquifOOawhzLPNVLNELce7qastKU-If18Na6O1aGo-sFbr961q8")' }}
                ></div>
                <div>
                  <p className="text-[#111518] text-base font-medium leading-normal">Building a Strong Credit Score: Tips and Tricks</p>
                  <p className="text-[#637988] text-sm font-normal leading-normal">Discover the key factors that influence your credit score and how to improve it.</p>
                </div>
              </div>
            </div>
            <h2 className="text-[#111518] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Trending Videos</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex items-stretch p-4 gap-3">
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCqNpa3xZuDobjVPsLhvkzMZ2iwJh1gGgA7qcEi2k3So-Psa3PCPXNcnq0NFxkkI2Mpr9Cv47GhUxIApcLMbzwue__4JAua7jZbENjTcKyWiPRnaqM52BH5lu8qkgsLA4jndF7hFuIBBKyicfm8CUx5hZfL-hZ3RpI3bClGbc7XzhwoXalZizND5-SUVcQ8O8zrxzk8zeSadmjoy69oXZ-rnRPH0Pq1uWvRPxhRs0rmv-VXKefXSqXfweZfBqUZAQZ_Z1dgVOX2BXw")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">5 Personal Finance Tips You Need to Know</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Quick and actionable tips to improve your financial health.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAal6JuppRhBYnfq98tBxm7qZzyz7IjapG1ggvjgBoRAQUG-qyh-UbR9ftQwHZmNqH2uUiEShMVEapJV9yokOHVYoEZnQuRnGF1tlnjlE9FGkFvl3lYicT0JSEQfTz9T1f9akEZ1sw2Of7qwcDN1jfiprCdlegr8_JcLaQnP8_IaHEgPC3t9mw10GBS3IhunG2Oz9SUVL7BKm1uafI_ZQ64zmVwPPiHcAPu__lzOQFajyQBC0EoTOOLmUEcP9F5C6K1ARisve19zQE")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">Investing for Beginners: A Step-by-Step Guide</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Get started with investing with this easy-to-follow guide.</p>
                  </div>
                </div>
                <div className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
                  <div
                    className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-lg flex flex-col"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC9nuvxBasxZZiSnIZNl73SPGDIwbJJOMWJXLyqrE7h_vC5UGuVTA3fgCQGSqXPGJPvjrCs7m_w0G64J9CcVaq2bc_IrXsyJvh9mIHx5lpL5P7RnhS6L7qtJ_opuW3ICpOdyDsMOhtkDIVEbc1ltCzMmT2hoo8IQxhzvYKzcSKsgOgDQWYNvp7tuDz7hbjcPJBv-5avWVkCrT9YHDf9vlt_6haC_jkP_yuZ9__C1Y1CaiTp_CXIGcR7Iph_T74sEx92PA4Y0SPmzD0")' }}
                  ></div>
                  <div>
                    <p className="text-[#111518] text-base font-medium leading-normal">How to Tackle Your Debt and Achieve Financial Freedom</p>
                    <p className="text-[#637988] text-sm font-normal leading-normal">Strategies to manage and eliminate your debt effectively.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <a className="text-[#637988] text-base font-normal leading-normal min-w-40" href="#">About Us</a>
                <a className="text-[#637988] text-base font-normal leading-normal min-w-40" href="#">Contact</a>
                <a className="text-[#637988] text-base font-normal leading-normal min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#637988] text-base font-normal leading-normal min-w-40" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#637988]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#637988]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#637988]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#637988] text-base font-normal leading-normal">@2024 FinLit. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;
