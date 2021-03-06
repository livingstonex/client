import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center">
      <div className="mt-80">
        <svg
          width="200px"
          height="100px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
          className="lds-ellipsis center-block"
          style={{ background: 'none' }}
        >
          <circle cx={84} cy={50} r={0} fill="#91a335">
            <animate
              attributeName="r"
              values="10;0;0;0;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="84;84;84;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="27.0546" cy={50} r={10} fill="#fc5908">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.5s"
            />
          </circle>
          <circle cx={16} cy={50} r="3.25135" fill="#27b7ea">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="-0.25s"
            />
          </circle>
          <circle cx={84} cy={50} r="6.74865" fill="#f6a61b">
            <animate
              attributeName="r"
              values="0;10;10;10;0"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;50;84;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
          <circle cx="61.0546" cy={50} r={10} fill="#8732a8">
            <animate
              attributeName="r"
              values="0;0;10;10;10"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
            <animate
              attributeName="cx"
              values="16;16;16;50;84"
              keyTimes="0;0.25;0.5;0.75;1"
              keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
              calcMode="spline"
              dur="1s"
              repeatCount="indefinite"
              begin="0s"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};

export default Loading;
