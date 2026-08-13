export default function HealthcareIcon({ size = 26 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 21s-6.5-4.2-9.3-8.4C.7 9.4 1.8 5.7 5 4.6 7.1 3.9 9.3 4.7 10.6 6.4L12 8l1.4-1.6c1.3-1.7 3.5-2.5 5.6-1.8 3.2 1.1 4.3 4.8 2.3 8-2.8 4.2-9.3 8.4-9.3 8.4Z"
        stroke="#0170B9"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 11.5h2l1-2 1.5 4 1-2H16"
        stroke="#0170B9"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
