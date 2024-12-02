export const TheaterIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width='22'
      height='16'
      viewBox='0 0 22 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <mask
        id='path-1-outside-1_113_1592'
        maskUnits='userSpaceOnUse'
        x='0'
        y='0'
        width='22'
        height='16'
        fill='black'
      >
        <rect fill='white' width='22' height='16' />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21 1H1V15H21V1ZM19 3H3V13H19V3Z'
        />
      </mask>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21 1H1V15H21V1ZM19 3H3V13H19V3Z'
        fill='#EAEAEA'
      />
      <path
        d='M1 1V0H0V1H1ZM21 1H22V0H21V1ZM1 15H0V16H1V15ZM21 15V16H22V15H21ZM3 3V2H2V3H3ZM19 3H20V2H19V3ZM3 13H2V14H3V13ZM19 13V14H20V13H19ZM1 2H21V0H1V2ZM2 15V1H0V15H2ZM21 14H1V16H21V14ZM20 1V15H22V1H20ZM3 4H19V2H3V4ZM4 13V3H2V13H4ZM19 12H3V14H19V12ZM18 3V13H20V3H18Z'
        fill='black'
        fillOpacity='0.1'
        mask='url(#path-1-outside-1_113_1592)'
      />
    </svg>
  );
};
