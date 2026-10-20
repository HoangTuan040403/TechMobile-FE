export interface SlideItem {
  id: string | number;
  image: string;
  title?: string;
  description?: string;
  link?: string;
}

export interface SliderProps {
  slides: SlideItem[];
  autoPlay?: boolean;
  delay?: number;
  className?: string;
}
