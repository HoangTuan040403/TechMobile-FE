export interface HomeTabConfig {
  key: string;
  label: string;
  slug: string;
}

export const HOME_TABS_CONFIG: HomeTabConfig[] = [
  { key: "dien-thoai", label: "Điện thoại", slug: "dien-thoai" },
  { key: "tablet", label: "Tablet", slug: "tablet" },
];
