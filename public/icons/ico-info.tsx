export const InfoIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width='22'
      height='22'
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M21 11C21 16.5228 16.5228 21 11 21C5.47717 21 1 16.5228 1 11C1 5.47717 5.47717 1 11 1C16.5228 1 21 5.47717 21 11ZM12 5V7H10V5H12ZM12 17V9H10V17H12Z'
        fill='#EAEAEA'
      />
      <path
        d='M11 21.5C16.799 21.5 21.5 16.799 21.5 11C21.5 5.20103 16.799 0.5 11 0.5C5.20103 0.5 0.5 5.20103 0.5 11C0.5 16.799 5.20103 21.5 11 21.5ZM11.5 5.5V6.5H10.5V5.5H11.5ZM10.5 9.5H11.5V16.5H10.5V9.5Z'
        stroke='black'
        strokeOpacity='0.1'
      />
    </svg>
  );
};
