import {
  HiOutlineDevicePhoneMobile,
  HiOutlineDeviceTablet,
  HiOutlineComputerDesktop,
  HiOutlineMicrophone,
  HiOutlineClock,
  HiOutlinePuzzlePiece,
  HiOutlineComputerDesktop as HiOutlinePC,
  HiOutlineNewspaper,
} from "react-icons/hi2";
import type { IconType } from "react-icons";

export const categoryIconMap: Record<string, IconType> = {
  "dien-thoai": HiOutlineDevicePhoneMobile,
  "tablet": HiOutlineDeviceTablet,
  "laptop": HiOutlineComputerDesktop,
  "am-thanh-mic-thu-am": HiOutlineMicrophone,
  "dong-ho-camera": HiOutlineClock,
  "phu-kien": HiOutlinePuzzlePiece,
  "pc-man-hinh-may-in": HiOutlinePC,
  "tin-cong-nghe": HiOutlineNewspaper,
};
