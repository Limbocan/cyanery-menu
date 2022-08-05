<template>
  <svg width="0" height="0" style="display: none;">
    <symbol id="menu-guide" viewBox="0 0 48 48">
      <g>
        <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" stroke-width="2"
          stroke="none" fill-rule="evenodd" />
        <g transform="translate(6.000000, 4.000000)">
          <path d="M18,0 L18,37" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#787878"
            fill="none" fill-rule="evenodd" />
          <polygon fill="#2F88FF" fill-rule="nonzero" points="18 4 33.5454545 4 36 8 33.5454545 12 18 12"
            stroke-linejoin="round" stroke-width="2" stroke="#787878" />
          <polygon fill="#2F88FF" fill-rule="nonzero"
            transform="translate(9.000000, 22.000000) scale(-1, 1) translate(-9.000000, -22.000000) "
            points="0 18 15.5454545 18 18 22 15.5454545 26 0 26" stroke-linejoin="round" stroke-width="2"
            stroke="#787878" />
          <path d="M10,38 L26,38" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="#787878"
            fill="none" fill-rule="evenodd" />
        </g>
      </g>
    </symbol>
    <symbol id="menu-props" viewBox="0 0 48 48">
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path
        d="M44 31C44 36.5228 39.5228 41 34 41C32.2091 41 30.5281 40.5292 29.0741 39.7046C26.5143 38.2529 24.6579 35.7046 24.1436 32.6983C24.0492 32.1463 24 31.5789 24 31C24 28.4323 24.9678 26.0906 26.5585 24.3198C28.3892 22.2818 31.0449 21 34 21C39.5228 21 44 25.4772 44 31Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M34 12V20V21C31.0449 21 28.3892 22.2818 26.5585 24.3198C24.9678 26.0906 24 28.4323 24 31C24 31.5789 24.0492 32.1463 24.1436 32.6983C24.6579 35.7046 26.5143 38.2529 29.0741 39.7046C26.4116 40.5096 22.8776 41 19 41C10.7157 41 4 38.7614 4 36V28V20V12"
        stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M34 12C34 14.7614 27.2843 17 19 17C10.7157 17 4 14.7614 4 12C4 9.23858 10.7157 7 19 7C27.2843 7 34 9.23858 34 12Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 28C4 30.7614 10.7157 33 19 33C20.807 33 22.5393 32.8935 24.1436 32.6983" stroke="#787878"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4 20C4 22.7614 10.7157 25 19 25C21.7563 25 24.339 24.7522 26.5585 24.3198" stroke="#787878"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M37 28C35 30 33 32 31 34M31 28L32 27M37 35L38 34" stroke="#FFF" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </symbol>
    <symbol id="menu-methods" viewBox="0 0 48 48">
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path fill-rule="evenodd" clip-rule="evenodd"
        d="M24 16H12V32C12 38.6274 17.3726 44 24 44C30.6274 44 36 38.6274 36 32V16H24Z" fill="#2F88FF" stroke="#787878"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M36 16C36 9.37258 30.6274 4 24 4V16H36Z" stroke="#787878" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M24 4C17.3726 4 12 9.37258 12 16H24V4Z" stroke="#787878" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
    </symbol>
    <symbol id="menu-api" viewBox="0 0 48 48">
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path
        d="M37 22.0001L34 25.0001L23 14.0001L26 11.0001C27.5 9.50002 33 7.00005 37 11.0001C41 15.0001 38.5 20.5 37 22.0001Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M42 6L37 11" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 25.9999L14 22.9999L25 33.9999L22 36.9999C20.5 38.5 15 41 11 36.9999C7 32.9999 9.5 27.5 11 25.9999Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M23 32L27 28" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 42L11 37" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M16 25L20 21" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="menu-example" viewBox="0 0 48 48">
      <path d="M12 4H36" stroke="#787878" stroke-width="2" stroke-linecap="round" />
      <path d="M10.7768 30L18.019 15.0386V4H30.0282V15.0386L37.246 30" stroke="#787878" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" />
      <path
        d="M7.79426 43.673C6.16736 42.8855 5.4869 40.9282 6.27442 39.3013L10.7768 30C10.7768 30 18 35 24 30C30 25 37.246 30 37.246 30L41.7351 39.3052C41.9491 39.7488 42.0602 40.2348 42.0602 40.7273C42.0602 42.5347 40.595 44 38.7875 44H9.22018C8.72629 44 8.2388 43.8882 7.79426 43.673Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linejoin="round" />
    </symbol>
    <symbol id="menu-update" viewBox="0 0 48 48">
      <rect width="48" height="48" fill="white" fill-opacity="0.01" />
      <path d="M48 0H0V48H48V0Z" fill="white" fill-opacity="0.01" />
      <path
        d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M33.5424 27C32.2681 31.0571 28.4778 34 24.0002 34C19.5226 34 15.7323 31.0571 14.458 27V33" stroke="#FFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M33.5424 15V21C32.2681 16.9429 28.4778 14 24.0002 14C19.5226 14 15.7323 16.9429 14.458 21" stroke="#FFF"
        stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </symbol>
    <symbol id="menu-popover" viewBox="0 0 48 48">
      <g>
        <rect width="48" height="48" fill="white" fill-opacity="0.01" stroke-linejoin="round" stroke-width="2"
          stroke="none" fill-rule="evenodd" />
        <g transform="translate(4.000000, 4.000000)">
          <path
            d="M12.7272727,20 C15.1515152,17.5757576 17.5757576,16.3636364 20,16.3636364 C22.4242424,16.3636364 24.8484848,17.5757576 27.2727273,20 C30.1010101,17.5757576 32.2222222,16.3636364 33.6363636,16.3636364 C35.0505051,16.3636364 37.1717172,17.5757576 40,20 C40,8.954305 31.045695,0 20,0 C8.954305,0 0,8.954305 0,20 C2.82828283,17.5757576 4.94949495,16.3636364 6.36363636,16.3636364 C7.77777778,16.3636364 9.8989899,17.5757576 12.7272727,20 Z"
            fill="#2F88FF" fill-rule="nonzero" stroke-linejoin="round" stroke-width="2" stroke="#787878" />
          <polyline stroke-linecap="round" points="0 20 20 40 12.7272727 20" stroke-linejoin="round" stroke-width="2"
            stroke="#787878" fill="none" fill-rule="evenodd" />
          <polyline stroke-linecap="round" points="27.2727273 20 20 40 40 20" stroke-linejoin="round" stroke-width="2"
            stroke="#787878" fill="none" fill-rule="evenodd" />
        </g>
      </g>
    </symbol>
    <symbol id="menu-collapse" viewBox="0 0 48 48">
      <path
        d="M4.59202 19.4667C4.29018 18.2091 5.24343 17 6.53679 17H41.4632C42.7566 17 43.7098 18.2091 43.408 19.4667L38.368 40.4667C38.1522 41.366 37.348 42 36.4232 42H11.5768C10.652 42 9.84784 41.366 9.63202 40.4667L4.59202 19.4667Z"
        fill="#2F88FF" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="11" y="7" width="8" height="10" stroke="#787878" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round" />
      <path d="M19 17L25.5 8L38 17" stroke="#787878" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15 25H23" stroke="#FFF" stroke-width="2" stroke-linecap="round" />
    </symbol>
  </svg>
</template>