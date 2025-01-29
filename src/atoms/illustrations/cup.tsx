import React from 'react';

import { Props } from './props.type.js';

export const Cup: React.FC<Props> = ({ width = 152, height = 152 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 152 152"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="76" cy="76" r="76" fill="white" />
    <path
      d="M105.853 116.816C105.853 117.662 105.226 118.645 103.65 119.677C102.105 120.69 99.8197 121.63 96.9287 122.431C91.1573 124.03 83.1414 125.029 74.2572 125.029C65.373 125.029 57.3571 124.03 51.5857 122.431C48.6947 121.63 46.4095 120.69 44.8645 119.677C43.2886 118.645 42.6616 117.662 42.6616 116.816C42.6616 115.97 43.2886 114.987 44.8645 113.954C46.4095 112.942 48.6947 112.002 51.5857 111.201C57.3571 109.601 65.373 108.603 74.2572 108.603C83.1414 108.603 91.1573 109.601 96.9287 111.201C99.8197 112.002 102.105 112.942 103.65 113.954C105.226 114.987 105.853 115.97 105.853 116.816Z"
      fill="white"
      stroke="#3B3552"
      strokeWidth="1.5"
    />
    <path
      d="M31.75 62.6172H116.765V74.7275C116.765 98.2037 97.7335 117.235 74.2574 117.235C50.7812 117.235 31.75 98.2037 31.75 74.7275V62.6172Z"
      fill="white"
      stroke="#3B3552"
      strokeWidth="1.5"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M108.28 71.9888C109.791 71.576 111.28 72.7134 111.28 74.2794L111.279 74.5493C111.279 92.0736 99.2304 106.784 82.9649 110.847C82.3502 111.001 81.583 111.141 80.7612 111.266C78.8158 111.562 77.8383 109.126 79.2482 107.753C79.3136 107.689 79.3765 107.627 79.4366 107.567C86.9741 99.9868 91.6697 89.5787 91.7917 78.0739L91.7941 77.6142C91.7946 75.8018 93.1732 74.287 94.9775 74.1161L95.3561 74.0802L96.5004 73.9546L97.6223 73.8227C97.8073 73.8002 97.9914 73.7774 98.1745 73.7544L99.2613 73.6131L100.324 73.4659L101.362 73.3127C101.532 73.2867 101.702 73.2604 101.871 73.2339L102.87 73.0721L103.842 72.9048C104.002 72.8764 104.161 72.8478 104.318 72.819L105.249 72.6435C106.013 72.4951 106.748 72.3412 107.451 72.1821L108.28 71.9888Z"
      fill="#3040D6"
      fillOpacity="0.05"
    />
    <path
      d="M116.765 61.4778C116.765 61.7541 116.62 62.1207 116.127 62.5764C115.635 63.0312 114.867 63.5054 113.809 63.9787C111.698 64.9229 108.596 65.7915 104.706 66.5277C96.9359 67.9976 86.1705 68.9116 74.2574 68.9116C62.3442 68.9116 51.5788 67.9976 43.8092 66.5277C39.9182 65.7915 36.8166 64.9229 34.7056 63.9787C33.6476 63.5054 32.8799 63.0312 32.388 62.5764C31.8951 62.1207 31.75 61.7541 31.75 61.4778C31.75 61.2015 31.8951 60.8349 32.388 60.3791C32.8799 59.9243 33.6476 59.4501 34.7056 58.9769C36.8166 58.0326 39.9182 57.164 43.8092 56.4279C51.5788 54.9579 62.3442 54.0439 74.2574 54.0439C86.1705 54.0439 96.9359 54.9579 104.706 56.4279C108.596 57.164 111.698 58.0326 113.809 58.9769C114.867 59.4501 115.635 59.9243 116.127 60.3791C116.62 60.8349 116.765 61.2015 116.765 61.4778Z"
      fill="white"
      stroke="#3B3552"
      strokeWidth="1.5"
    />
    <path
      d="M37.2725 75.0268L36.555 74.8084L36.3366 75.5259L37.054 75.7443L37.2725 75.0268ZM62.2577 78.6114L62.217 79.3603L62.9659 79.4009L63.0066 78.652L62.2577 78.6114ZM37.7093 73.5918L37.9277 72.8743L37.2102 72.6559L36.9918 73.3734L37.7093 73.5918ZM62.3391 77.1136L63.088 77.1543L63.1286 76.4054L62.3797 76.3647L62.3391 77.1136ZM67.1576 78.8199L66.408 78.7966L66.3846 79.5462L67.1343 79.5696L67.1576 78.8199ZM74.2575 78.9293V79.6793H75.0075V78.9293H74.2575ZM67.2043 77.3206L67.2276 76.571L66.478 76.5477L66.4546 77.2973L67.2043 77.3206ZM74.2575 77.4293H75.0075V76.6793H74.2575V77.4293ZM37.054 75.7443C42.815 77.498 51.7566 78.7922 62.217 79.3603L62.2984 77.8625C51.886 77.297 43.083 76.0116 37.4909 74.3093L37.054 75.7443ZM36.9918 73.3734L36.555 74.8084L37.99 75.2452L38.4268 73.8102L36.9918 73.3734ZM62.3797 76.3647C52.0153 75.8018 43.3509 74.5252 37.9277 72.8743L37.4909 74.3093C43.083 76.0116 51.886 77.297 62.2984 77.8625L62.3797 76.3647ZM63.0066 78.652L63.088 77.1543L61.5902 77.0729L61.5088 78.5707L63.0066 78.652ZM67.1343 79.5696C69.4526 79.6417 71.8321 79.6793 74.2575 79.6793V78.1793C71.8475 78.1793 69.4836 78.142 67.1809 78.0703L67.1343 79.5696ZM66.4546 77.2973L66.408 78.7966L67.9072 78.8433L67.9539 77.344L66.4546 77.2973ZM74.2575 76.6793C71.863 76.6793 69.5146 76.6422 67.2276 76.571L67.1809 78.0703C69.4836 78.142 71.8475 78.1793 74.2575 78.1793V76.6793ZM75.0075 78.9293V77.4293H73.5075V78.9293H75.0075Z"
      fill="#3B3552"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M74.8439 60.3097L76.3503 60.3177L77.84 60.3346L79.3118 60.3601L80.7645 60.3942L82.1967 60.4365L83.1395 60.4693L84.5349 60.5251L85.9064 60.5887L86.8069 60.6354L87.6959 60.6855L89.4378 60.7954L90.7112 60.8862L91.9549 60.984L93.5647 61.125L94.3481 61.1999L95.4951 61.3176L96.9701 61.4843L97.6835 61.5717L98.3803 61.6617L99.3936 61.8015L100.047 61.8978L100.994 62.0469L101.603 62.1492L102.48 62.307L103.04 62.415L103.581 62.5252L104.102 62.6375L104.602 62.7518L105.081 62.8682L105.313 62.9271L105.76 63.0464L106.185 63.1675L106.782 63.3526L106.893 63.3981C107.404 63.6071 107.349 64.3528 106.81 64.4736C106.61 64.5186 106.406 64.5632 106.199 64.6074L105.687 64.7153L104.843 64.8845L103.879 65.0663C103.522 65.1315 103.16 65.1954 102.792 65.2581L102.236 65.3511L101.101 65.5314C99.0563 65.8448 96.8669 66.1208 94.5613 66.3565L93.6913 66.443L92.3666 66.5655L91.0192 66.6794L90.3374 66.733L88.9582 66.8335L88.2611 66.8804L87.5591 66.9251L86.1413 67.0075L84.7058 67.0806L83.9818 67.1137L82.522 67.1728C79.8317 67.2723 77.0665 67.3238 74.2574 67.3238C71.9165 67.3238 69.6061 67.2881 67.3441 67.2185L65.9929 67.1728L64.5331 67.1137L63.8091 67.0806L62.3736 67.0075L60.9558 66.9251L60.2538 66.8804L59.5567 66.8335L58.1775 66.733L57.4956 66.6794L56.1483 66.5655L55.4831 66.5054L54.1701 66.3785C52.0831 66.1681 50.09 65.9248 48.2115 65.6507L47.4135 65.5314L46.2786 65.3511C45.7811 65.2693 45.293 65.1852 44.8146 65.0988L44.1045 64.9675L43.672 64.8845L42.8282 64.7153C42.5369 64.6551 42.251 64.5942 41.9705 64.5326C41.3516 64.3967 41.2871 63.5306 41.8801 63.3074C41.9041 63.2984 41.9211 63.2922 41.9302 63.2893L42.4388 63.1357L43.0949 62.9551L43.6788 62.8079L44.1697 62.6924L44.6813 62.5789L45.4869 62.4126L46.3371 62.2513L46.9281 62.1465L47.8498 61.9937L48.4872 61.8949L49.1426 61.7985L49.8155 61.7045L50.857 61.5685L51.9358 61.4383L52.6752 61.355L53.4303 61.2744L54.2006 61.1966L55.384 61.0853L56.5998 60.9807L57.8465 60.883L59.123 60.7923L60.428 60.7087L61.3132 60.6571L62.2102 60.6089L63.5767 60.5429L64.9675 60.4847L66.3814 60.4345L67.8169 60.3924L69.2728 60.3587L70.2542 60.341L71.7414 60.3216L72.7425 60.3136L73.7507 60.3096L74.8439 60.3097Z"
      fill="#3040D6"
    />
    <path
      d="M116.735 61.8672H117.504C127.762 61.8672 135.612 71.0005 134.071 81.1418V81.1418C132.827 89.3306 125.787 95.3819 117.504 95.3819H111.643"
      stroke="#3B3552"
      strokeWidth="1.5"
    />
    <path
      d="M66.0734 19L67.9404 21.1159C70.9952 24.578 70.0904 29.9737 66.0734 32.25V32.25C62.0564 34.5263 61.1517 39.922 64.2065 43.3841L66.0734 45.5"
      stroke="#3B3552"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M76.9855 36.9268L78.8525 39.0426C81.9073 42.5047 81.0025 47.9005 76.9855 50.1768V50.1768C72.9685 52.4531 72.0638 57.8488 75.1186 61.3109L76.9855 63.4268"
      stroke="#3B3552"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default Cup;
