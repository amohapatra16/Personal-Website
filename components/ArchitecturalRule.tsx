interface ArchitecturalRuleProps {
  className?: string;
}

export default function ArchitecturalRule({ className = "" }: ArchitecturalRuleProps) {
  return (
    <div
      className={`h-[0.8px] bg-[rgba(38,29,17,0.55)] w-full shrink-0 ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
