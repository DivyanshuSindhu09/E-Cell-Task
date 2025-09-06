import React from 'react'

const Loading = ({ height = '100vh' }) => {
  return (
    <section
      style={{ height }}
      className="flex items-center absolute z-9999999999 top-0 left-0 w-full justify-center bg-gray-900"
    >
      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="6" width="2.8" height="12">
          <animate
            id="spinner_CcmT"
            begin="0;spinner_IzZB.end-0.1s"
            attributeName="y"
            calcMode="spline"
            dur="0.6s"
            values="6;1;6"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
          <animate
            begin="0;spinner_IzZB.end-0.1s"
            attributeName="height"
            calcMode="spline"
            dur="0.6s"
            values="12;22;12"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
        </rect>
        <rect x="5.8" y="6" width="2.8" height="12">
          <animate
            begin="spinner_CcmT.begin+0.1s"
            attributeName="y"
            calcMode="spline"
            dur="0.6s"
            values="6;1;6"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
          <animate
            begin="spinner_CcmT.begin+0.1s"
            attributeName="height"
            calcMode="spline"
            dur="0.6s"
            values="12;22;12"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
        </rect>
        <rect x="10.6" y="6" width="2.8" height="12">
          <animate
            begin="spinner_CcmT.begin+0.2s"
            attributeName="y"
            calcMode="spline"
            dur="0.6s"
            values="6;1;6"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
          <animate
            begin="spinner_CcmT.begin+0.2s"
            attributeName="height"
            calcMode="spline"
            dur="0.6s"
            values="12;22;12"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
        </rect>
        <rect x="15.4" y="6" width="2.8" height="12">
          <animate
            begin="spinner_CcmT.begin+0.3s"
            attributeName="y"
            calcMode="spline"
            dur="0.6s"
            values="6;1;6"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
          <animate
            begin="spinner_CcmT.begin+0.3s"
            attributeName="height"
            calcMode="spline"
            dur="0.6s"
            values="12;22;12"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
        </rect>
        <rect x="20.2" y="6" width="2.8" height="12">
          <animate
            id="spinner_IzZB"
            begin="spinner_CcmT.begin+0.4s"
            attributeName="y"
            calcMode="spline"
            dur="0.6s"
            values="6;1;6"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
          <animate
            begin="spinner_CcmT.begin+0.4s"
            attributeName="height"
            calcMode="spline"
            dur="0.6s"
            values="12;22;12"
            keySplines=".36,.61,.3,.98;.36,.61,.3,.98"
          />
        </rect>
      </svg>
    </section>
  );
};

export default Loading;
