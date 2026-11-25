interface ArchitecturalRuleProps {
  className?: string;
  thickness?: "thin" | "thick";
}

export default function ArchitecturalRule({
  className = "",
  thickness = "thin",
}: ArchitecturalRuleProps) {
  return (
    <div
      className={`${thickness === "thick" ? "h-[0.8px]" : "h-[0.2px]"} bg-[rgba(38,29,17,0.55)] w-full shrink-0 ${className}`}
      role="separator"
      aria-orientation="horizontal"
    />
  );
}
