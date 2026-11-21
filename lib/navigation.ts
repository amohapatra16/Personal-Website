export interface NavItem {
  id: string;
  index: string;
  label: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: "about", index: "01", label: "About", href: "/about" },
  { id: "schemes", index: "02", label: "Schemes", href: "/schemes" },
  { id: "writing", index: "03", label: "Writing", href: "/writing" },
  { id: "archives", index: "04", label: "Archives", href: "/archives" },
  { id: "bookshelf", index: "05", label: "Bookshelf", href: "/bookshelf" },
  { id: "criterion", index: "06", label: "Criterion", href: "/criterion" },
];
