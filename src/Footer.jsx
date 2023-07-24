import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 w-full">
      <div className="container flex-col flex justify-center items-center gap-5">
        <p className="text-white text-4xl text-center md:text-6xl font-normal">
          Join our Community
        </p>
        <div className="flex items-center gap-4 flex-wrap  justify-center">
          <a
            href="https://twitter.com/RareHamsterERC"
            className="scale-75 hover:scale-95 cursor-pointer transition"
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.38281"
                y="2.55554"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#FA934C"
              />
              <rect
                x="0.828125"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#F6C62C"
              />
              <path
                d="M52.7398 22.0528C51.3833 22.6556 49.9223 23.0617 48.3904 23.2462C49.9561 22.3081 51.1526 20.8254 51.7217 19.0568C50.2575 19.9242 48.6365 20.5548 46.9109 20.8931C45.5328 19.4197 43.5611 18.5 41.3864 18.5C36.4956 18.5 32.9029 23.0617 34.0071 27.7987C27.7168 27.4819 22.1339 24.4674 18.3996 19.8873C16.4156 23.2893 17.3723 27.7433 20.7435 29.998C19.5039 29.958 18.3381 29.6166 17.3169 29.0506C17.2338 32.5572 19.75 35.8393 23.392 36.5714C22.3277 36.8605 21.1588 36.9282 19.9715 36.7006C20.9342 39.7089 23.7365 41.8959 27.0462 41.9574C23.8564 44.4551 19.8484 45.5717 15.8281 45.098C19.1809 47.2481 23.1582 48.5 27.4338 48.5C41.4972 48.5 49.4393 36.6237 48.9595 25.9715C50.4421 24.9073 51.7248 23.5723 52.7398 22.0528Z"
                fill="#242424"
              />
            </svg>
          </a>
          <a
            href="https://t.me/RareHamster"
            className="scale-75 hover:scale-95 cursor-pointer transition"
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.71875"
                y="2.55554"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#FA934C"
              />
              <rect
                x="0.164062"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#F6C62C"
              />
              <g clip-path="url(#clip0_1594_309)">
                <path
                  d="M32.8281 17.5C24.5444 17.5 17.8281 24.2163 17.8281 32.5C17.8281 40.7838 24.5444 47.5 32.8281 47.5C41.1119 47.5 47.8281 40.7838 47.8281 32.5C47.8281 24.2163 41.1119 17.5 32.8281 17.5ZM40.1956 27.7762L37.7331 39.3762C37.5519 40.1987 37.0619 40.3988 36.3781 40.0113L32.6281 37.2487L30.8206 38.9913C30.7321 39.1059 30.6184 39.1987 30.4884 39.2627C30.3584 39.3266 30.2155 39.3599 30.0706 39.36H30.0644L30.3306 35.5425L37.2806 29.265C37.5806 28.9987 37.2131 28.8475 36.8144 29.1138L28.2281 34.5212L24.5281 33.3663C23.7281 33.1125 23.7056 32.5663 24.6969 32.1737L39.1544 26.6012C39.8269 26.3562 40.4119 26.7613 40.1944 27.7775L40.1956 27.7762Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_1594_309">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(17.8281 17.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href=""
            className="scale-75 hover:scale-95 cursor-pointer transition"
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.05469"
                y="2.55554"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#FA934C"
              />
              <rect
                x="0.5"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#F6C62C"
              />
              <g clip-path="url(#clip0_1594_314)">
                <path
                  d="M24.1359 31.7666C24.1359 31.0742 24.7047 30.5054 25.3959 30.5054H27.5211C28.2135 30.5054 28.8063 31.0742 28.8063 31.7918V39.8066C29.0535 39.7322 29.3499 39.6578 29.6967 39.5834C30.1659 39.4598 30.5127 39.0398 30.5127 38.5442V28.5998C30.5127 27.9074 31.0815 27.3134 31.7979 27.3134H33.9231C34.6155 27.3134 35.2083 27.8822 35.2083 28.5998V37.8278C35.2083 37.8278 35.7279 37.6046 36.2463 37.3826C36.6423 37.2098 36.8895 36.839 36.8895 36.3926V25.385C36.8895 24.6926 37.4583 24.0986 38.1507 24.0986H40.2759C40.9683 24.0986 41.5371 24.6674 41.5371 25.385V34.4642C43.3659 33.1286 45.2451 31.5206 46.7283 29.591C47.1735 29.0222 47.2971 28.2794 47.0499 27.587C44.3307 19.7702 35.7795 15.6134 27.9687 18.335C20.1579 21.0566 16.0059 29.615 18.7239 37.433C19.0203 38.3234 19.4163 39.1646 19.8855 39.9806C20.2563 40.6238 20.9487 40.9946 21.6903 40.9202C22.0863 40.895 22.5807 40.8458 23.1975 40.7714C23.7411 40.7222 24.1371 40.2518 24.1371 39.707L24.1359 31.7666Z"
                  fill="#242424"
                />
                <path
                  d="M24.0859 44.6306C30.7843 49.5038 40.1527 48.0194 45.0211 41.3162C46.8751 38.7434 47.8879 35.651 47.8879 32.4854C47.8879 32.1386 47.8627 31.793 47.8387 31.4462C42.3775 39.6338 32.2675 43.4678 24.0859 44.6306Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_1594_314">
                  <rect
                    width="30"
                    height="30"
                    fill="white"
                    transform="translate(17.8906 17.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href=""
            className="scale-75 hover:scale-95 cursor-pointer transition"
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3.39062"
                y="2.55554"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#FA934C"
              />
              <rect
                x="0.835938"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#F6C62C"
              />
              <path
                d="M21.212 29.7915C20.545 29.5691 20.5386 29.2101 21.2248 28.9813L45.6137 20.8521C46.2897 20.6272 46.6768 21.0055 46.4877 21.6673L39.5187 46.055C39.327 46.731 38.9373 46.754 38.6511 46.1125L34.0588 35.7778L41.7254 25.5556L31.5032 33.2223L21.212 29.7915Z"
                fill="#242424"
              />
            </svg>
          </a>
          <a
            href=""
            className="scale-75 hover:scale-95 cursor-pointer transition"
          >
            <svg
              width="70"
              height="69"
              viewBox="0 0 70 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.71875"
                y="2.55554"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#FA934C"
              />
              <rect
                x="0.164062"
                width="66.4444"
                height="66.4444"
                rx="5.11111"
                fill="#F6C62C"
              />
              <g clip-path="url(#clip0_1594_352)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M29.6915 20.2122C27.9063 21.1421 26.4458 21.929 26.4461 21.961C26.4469 22.0436 30.7306 24.2131 30.8826 24.2078C30.9518 24.2055 31.4535 23.9745 31.9975 23.6946L32.9868 23.1858L34.0672 23.7411L35.1475 24.2966L36.9168 23.5016C39.5827 22.3036 39.8595 22.1724 39.8161 22.1283C39.7585 22.0697 38.8023 21.5561 36.2081 20.1903C34.9543 19.5302 33.7374 18.883 33.5038 18.752C33.2702 18.621 33.0472 18.5157 33.0083 18.5177C32.9693 18.5198 31.4767 19.2823 29.6915 20.2122ZM21.8617 24.2667L20.0034 25.2266V29.4395C20.0034 31.7565 20.0278 33.6523 20.0577 33.6523C20.0875 33.6523 21.0018 33.2559 22.0894 32.7715L24.0669 31.8908V27.4501L25.0333 27.9766C25.7779 28.3819 26.523 28.7864 27.2686 29.1901L28.5375 29.8771L29.1021 29.6218C29.4562 29.4614 29.8096 29.2995 30.1623 29.136C30.4348 29.0091 31.1039 28.7077 31.649 28.4663C32.1941 28.2247 32.6987 27.9817 32.7702 27.9263C32.8653 27.8528 31.7063 27.2123 28.4834 25.5573C26.0541 24.3098 23.9886 23.2931 23.8933 23.298C23.798 23.3028 22.8838 23.7387 21.8617 24.2667ZM40.1511 24.5363C38.8854 25.1077 37.849 25.598 37.8478 25.6259C37.8467 25.6539 38.5365 26.064 39.3808 26.5373C40.2251 27.0106 40.9159 27.4232 40.9159 27.4543C40.9159 27.4853 40.1688 27.8473 39.2558 28.2589C38.3426 28.6704 36.0346 29.7127 34.1268 30.5751L27.7341 33.4647C26.126 34.1917 24.6765 34.8469 24.513 34.921C21.2284 36.4079 20.3256 36.8204 20.2016 36.8913C20.0769 36.9626 20.0487 37.3768 20.0265 39.4559L20 41.9357L21.6618 42.7824L23.3236 43.6291L25.6279 42.5892C26.8954 42.0173 27.9323 41.5193 27.9323 41.4827C27.9323 41.4461 27.6981 41.2935 27.412 41.1434C27.1257 40.9933 26.5348 40.6611 26.0987 40.405C25.6627 40.1488 25.2278 39.9138 25.1324 39.8827C25.0369 39.8516 24.9602 39.7972 24.9618 39.7618C24.9634 39.7264 25.9781 39.2444 27.2166 38.6906C29.6221 37.6151 31.463 36.7861 35.4152 34.9989C37.1825 34.1998 38.95 33.4013 40.7177 32.6033C42.2712 31.902 44.0775 31.083 44.7317 30.7833L45.921 30.2383L45.9475 27.7304L45.974 25.2225L44.2885 24.3573C43.3615 23.8816 42.5691 23.4935 42.5275 23.4949C42.486 23.4962 41.4166 23.9648 40.1511 24.5363ZM45.4694 33.5841C45.2211 33.7054 44.7305 33.9326 44.3792 34.0888C44.028 34.2451 43.3615 34.5458 42.8981 34.7573L42.0557 35.1415L42.0364 37.3433C42.0258 38.5542 41.9812 39.5396 41.9373 39.5333C41.8376 39.5184 40.2587 38.7087 38.6715 37.8582C37.526 37.2444 37.454 37.22 37.1848 37.3534C37.0292 37.4305 36.0991 37.8476 35.1179 38.2805C34.1366 38.7134 33.3019 39.0958 33.2626 39.1304C33.2234 39.165 35.1982 40.2353 37.6512 41.5091L42.1109 43.8249L44.016 42.8394C45.0637 42.2975 45.9546 41.8031 45.9956 41.7409C46.088 41.6011 46.0801 33.3443 45.9876 33.3555C45.9511 33.3599 45.7178 33.4628 45.4694 33.5841ZM34.9197 43.2755C34.5892 43.4175 34.2588 43.5598 33.9285 43.7023C32.9312 44.1338 33.1266 44.1481 31.9401 43.5574C31.1498 43.164 30.8091 43.0426 30.6612 43.1015C30.5503 43.1457 29.5958 43.5752 28.5398 44.0559C27.484 44.5365 26.5835 44.9298 26.5387 44.9298C26.0957 44.9298 26.8321 45.3698 29.6741 46.8034L33.007 48.4845L34.4093 47.7922C35.1806 47.4114 36.7363 46.6489 37.8664 46.0977C38.9965 45.5464 39.9071 45.0811 39.8901 45.0635C39.8729 45.046 38.926 44.5598 37.7858 43.983L35.7125 42.9344L34.9197 43.2755Z"
                  fill="#242424"
                />
              </g>
              <defs>
                <clipPath id="clip0_1594_352">
                  <rect
                    width="26.088"
                    height="30"
                    fill="white"
                    transform="translate(20 18.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
        <div className="text-white text-xl font-normal leading-9 text-center">
          Copyright © 2023 Rare-Hamster. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
