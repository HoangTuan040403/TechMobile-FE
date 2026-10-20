import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaTruck,
    FaShieldAlt,
    FaCreditCard,
} from "react-icons/fa"

export const COMPANY_INFO = {
    name: "Tech Mobile",
    description:
        "Cung cấp điện thoại, laptop và phụ kiện công nghệ chính hãng với giá tốt nhất thị trường.",
    address: "123 Nguyễn Văn Linh, Q.7, TP.HCM",
    phone: "0909 123 456",
    phoneHref: "tel:+84909123456",
    email: "support@techmobile.vn",
    emailHref: "mailto:support@techmobile.vn",
} as const

export const SOCIAL_LINKS = [
    { name: "Facebook", href: "https://facebook.com/techmobile", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com/techmobile", icon: FaInstagram },
    { name: "Youtube", href: "https://youtube.com/techmobile", icon: FaYoutube },
] as const

export const FOOTER_QUICK_LINKS = [
    { label: "Trang chủ", to: "/" },
    { label: "Sản phẩm", to: "/products" },
    { label: "Giới thiệu", to: "/about" },
    { label: "Liên hệ", to: "/contact" },
] as const

export const FOOTER_BOTTOM_LINKS = [
    { label: "Chính sách bảo mật", to: "/privacy" },
    { label: "Điều khoản sử dụng", to: "/terms" },
] as const

export const SERVICE_HIGHLIGHTS = [
    {
        title: "Giao hàng toàn quốc",
        description: "Nhanh chóng & tiết kiệm",
        icon: FaTruck,
    },
    {
        title: "Bảo hành chính hãng",
        description: "Đổi trả trong 7 ngày",
        icon: FaShieldAlt,
    },
    {
        title: "Thanh toán đa dạng",
        description: "COD, chuyển khoản, thẻ",
        icon: FaCreditCard,
    },
] as const
