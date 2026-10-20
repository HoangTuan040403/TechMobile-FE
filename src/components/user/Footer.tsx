import { Link } from "react-router-dom"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import Container from "../common/Container/Container"
import { useCategories } from "@/hooks/useCategories"
import {
    COMPANY_INFO,
    SOCIAL_LINKS,
    FOOTER_QUICK_LINKS,
    FOOTER_BOTTOM_LINKS,
    SERVICE_HIGHLIGHTS,
} from "../../constants/footer.constant"

const Footer = () => {
    const { categories, loading, error } = useCategories()

    return (
        <footer className="bg-gray-900 text-gray-300 mt-16">
            {/* Cam kết dịch vụ */}
            <div className="border-b border-gray-800">
                <Container>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-6">
                        {SERVICE_HIGHLIGHTS.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.title} className="flex items-center gap-3">
                                    <Icon className="w-6 h-6 text-blue-500 shrink-0" aria-hidden="true" />
                                    <div>
                                        <p className="text-white text-sm font-medium">{item.title}</p>
                                        <p className="text-xs text-gray-400">{item.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </div>

            {/* Nội dung chính */}
            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
                    {/* Giới thiệu */}
                    <div>
                        <h3 className="text-white text-lg font-bold mb-4">{COMPANY_INFO.name}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            {COMPANY_INFO.description}
                        </p>
                        <div className="flex gap-3 mt-4">
                            {SOCIAL_LINKS.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-blue-600 transition-colors"
                                    >
                                        <Icon className="w-4 h-4" aria-hidden="true" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Liên kết nhanh */}
                    <nav aria-label="Liên kết nhanh">
                        <h4 className="text-white font-semibold mb-4">Liên kết nhanh</h4>
                        <ul className="space-y-2 text-sm">
                            {FOOTER_QUICK_LINKS.map((link) => (
                                <li key={link.to}>
                                    <Link to={link.to} className="hover:text-blue-500 transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Danh mục sản phẩm */}
                    <nav aria-label="Danh mục sản phẩm">
                        <h4 className="text-white font-semibold mb-4">Danh mục</h4>
                        {loading && (
                            <p className="text-sm text-gray-500">Đang tải danh mục...</p>
                        )}
                        {error && (
                            <p className="text-sm text-gray-500">{error}</p>
                        )}
                        {!loading && !error && (
                            <ul className="space-y-2 text-sm">
                                {categories.map((category) => (
                                    <li key={category._id}>
                                        <Link
                                            to={`/category/${category.slug}`}
                                            className="hover:text-blue-500 transition-colors"
                                        >
                                            {category.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </nav>

                    {/* Thông tin liên hệ */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Liên hệ</h4>
                        <address className="not-italic space-y-3 text-sm">
                            <p className="flex items-start gap-2">
                                <FaMapMarkerAlt className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" aria-hidden="true" />
                                <span>{COMPANY_INFO.address}</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaPhoneAlt className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                                <a href={COMPANY_INFO.phoneHref} className="hover:text-blue-500 transition-colors">
                                    {COMPANY_INFO.phone}
                                </a>
                            </p>
                            <p className="flex items-center gap-2">
                                <FaEnvelope className="w-4 h-4 text-blue-500 shrink-0" aria-hidden="true" />
                                <a href={COMPANY_INFO.emailHref} className="hover:text-blue-500 transition-colors">
                                    {COMPANY_INFO.email}
                                </a>
                            </p>
                        </address>
                    </div>
                </div>
            </Container>

            {/* Bottom bar */}
            <div className="border-t border-gray-800">
                <Container>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-2 py-4 text-xs text-gray-500">
                        <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
                        <div className="flex gap-4">
                            {FOOTER_BOTTOM_LINKS.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="hover:text-gray-300 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

export default Footer
