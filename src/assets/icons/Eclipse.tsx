import type { ComponentPropsWithRef } from 'react';

export const Eclipse = (props: ComponentPropsWithRef<'svg'>) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M15.75 14C15.75 14.3461 15.6474 14.6845 15.4551 14.9722C15.2628 15.26 14.9895 15.4843 14.6697 15.6168C14.3499 15.7492 13.9981 15.7839 13.6586 15.7164C13.3191 15.6489 13.0073 15.4822 12.7626 15.2374C12.5178 14.9927 12.3512 14.6809 12.2836 14.3414C12.2161 14.0019 12.2508 13.6501 12.3832 13.3303C12.5157 13.0105 12.74 12.7372 13.0278 12.5449C13.3155 12.3526 13.6539 12.25 14 12.25C14.4641 12.25 14.9092 12.4344 15.2374 12.7626C15.5656 13.0908 15.75 13.5359 15.75 14ZM6.5625 12.25C6.21638 12.25 5.87804 12.3526 5.59025 12.5449C5.30247 12.7372 5.07816 13.0105 4.94571 13.3303C4.81326 13.6501 4.7786 14.0019 4.84613 14.3414C4.91365 14.6809 5.08032 14.9927 5.32506 15.2374C5.56981 15.4822 5.88163 15.6489 6.22109 15.7164C6.56056 15.7839 6.91243 15.7492 7.2322 15.6168C7.55197 15.4843 7.82528 15.26 8.01757 14.9722C8.20986 14.6845 8.3125 14.3461 8.3125 14C8.3125 13.5359 8.12813 13.0908 7.79994 12.7626C7.47175 12.4344 7.02663 12.25 6.5625 12.25ZM21.4375 12.25C21.0914 12.25 20.753 12.3526 20.4653 12.5449C20.1775 12.7372 19.9532 13.0105 19.8207 13.3303C19.6883 13.6501 19.6536 14.0019 19.7211 14.3414C19.7887 14.6809 19.9553 14.9927 20.2001 15.2374C20.4448 15.4822 20.7566 15.6489 21.0961 15.7164C21.4356 15.7839 21.7874 15.7492 22.1072 15.6168C22.427 15.4843 22.7003 15.26 22.8926 14.9722C23.0849 14.6845 23.1875 14.3461 23.1875 14C23.1875 13.5359 23.0031 13.0908 22.6749 12.7626C22.3467 12.4344 21.9016 12.25 21.4375 12.25Z"
        fill="#92B5D9"
      />
    </svg>
  );
};

export default Eclipse;

// <!-- <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g filter="url(#filter0_d_241_366)">
// <circle cx="8" cy="4" r="4" fill="#92B5D9"/>
// <circle cx="8" cy="4" r="3.5" stroke="black"/>
// </g>
// <defs>
// <filter id="filter0_d_241_366" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"/>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
// <feOffset dy="4"/>
// <feGaussianBlur stdDeviation="2"/>
// <feComposite in2="hardAlpha" operator="out"/>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_241_366"/>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_241_366" result="shape"/>
// </filter>
// </defs>
// </svg> -->
