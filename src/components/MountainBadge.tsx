interface Props {
  color: string;
  size?: number;
  className?: string;
}

const MountainBadge = ({ color, size = 80, className }: Props) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
  >
    <circle cx="24" cy="24" r="22" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
    <path d="M 0 0 L 4 -9 L 6 -7 L 9 -12 L 12 -5 L 13 -9 L 16 0 L 8 0 L 4 -3 L 1 0 M 1 0 L 0 0 Z" fill={color} transform="translate(8, 34) scale(2)" />
  </svg>
);

export default MountainBadge;
