export const FullscreenIcon = ({ className }: { className: string }) => {
  return (
    <svg
      width='18'
      height='18'
      viewBox='0 0 18 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path d='M17 1H11V3H15V7H17V1Z' fill='#EAEAEA' />
      <path d='M17 11H15V15H11V17H17V11Z' fill='#EAEAEA' />
      <path d='M3 7V3H7V1H1V7H3Z' fill='#EAEAEA' />
      <path d='M1 11V17H7V15H3V11H1Z' fill='#EAEAEA' />
      <path
        d='M17.5 1V0.5H17H11H10.5V1V3V3.5H11H14.5V7V7.5H15H17H17.5V7V1ZM17.5 11V10.5H17H15H14.5V11V14.5H11H10.5V15V17V17.5H11H17H17.5V17V11ZM3 7.5H3.5V7V3.5H7H7.5V3V1V0.5H7H1H0.5V1V7V7.5H1H3ZM1 10.5H0.5V11V17V17.5H1H7H7.5V17V15V14.5H7H3.5V11V10.5H3H1Z'
        stroke='black'
        strokeOpacity='0.1'
      />
    </svg>
  );
};
