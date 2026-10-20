import {
    HiOutlineMenu,
    HiOutlineShoppingCart,
    HiOutlineLocationMarker,
    HiOutlineClipboardList,
    HiOutlineUser,
    HiSearch,
} from "react-icons/hi";
import Container from "../common/Container/Container";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-sm">
            <Container>
                <div className="flex h-16 items-center gap-2">

                    {/* Logo */}
                    <div className="w-16 shrink-0 lg:w-28">
                        <Link to="/" aria-label="Về trang chủ TechMobile">
                            <img
                                src={logo}
                                alt="TechMobile Logo"
                                className="h-8 w-auto lg:h-10"
                            />
                        </Link>
                    </div>

                    {/* Danh mục */}
                    <button
                        aria-label="Danh mục sản phẩm"
                        className="shrink-0 rounded-lg bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200 sm:px-4 sm:py-2"
                    >
                        <div className="flex items-center gap-2">
                            <HiOutlineMenu size={20} aria-hidden="true" />
                            <span className="hidden sm:inline">
                                Danh mục
                            </span>
                        </div>
                    </button>

                    {/* Search */}
                    <div className="mx-2 flex-1 sm:mx-4 lg:mx-6">
                        <form role="search" className="relative">
                            <label
                                htmlFor="site-search"
                                className="sr-only"
                            >
                                Tìm kiếm sản phẩm
                            </label>

                            <HiSearch
                                size={20}
                                aria-hidden="true"
                                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                            />

                            <input
                                id="site-search"
                                type="search"
                                placeholder="Tìm kiếm..."
                                className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-sky-500 focus:outline-none"
                            />
                        </form>
                    </div>

                    {/* Actions */}
                    <nav
                        aria-label="Liên kết người dùng"
                        className="flex items-center gap-4 sm:gap-6 lg:gap-8"
                    >
                        {/* Store */}
                        <button
                            aria-label="Cửa hàng"
                            className="hidden lg:flex flex-col items-center text-xs text-gray-700 hover:text-sky-600"
                        >
                            <HiOutlineLocationMarker
                                size={22}
                                aria-hidden="true"
                            />
                            <span>Cửa hàng</span>
                        </button>

                        {/* Order Lookup */}
                        <button
                            aria-label="Tra cứu đơn hàng"
                            className="hidden lg:flex flex-col items-center text-xs text-gray-700 hover:text-sky-600"
                        >
                            <HiOutlineClipboardList
                                size={22}
                                aria-hidden="true"
                            />
                            <span>Tra cứu</span>
                        </button>

                        {/* Cart */}
                        <button
                            aria-label="Giỏ hàng"
                            className="flex flex-col items-center text-xs text-gray-700 hover:text-sky-600"
                        >
                            <div className="relative">
                                <HiOutlineShoppingCart
                                    size={22}
                                    aria-hidden="true"
                                />

                                <span
                                    className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] text-white"
                                >
                                    0
                                </span>
                            </div>

                            <span className="hidden sm:inline">
                                Giỏ hàng
                            </span>
                        </button>

                        {/* User */}
                        <button
                            aria-label="Đăng nhập"
                            className="flex flex-col items-center text-xs text-gray-700 hover:text-sky-600"
                        >
                            <HiOutlineUser
                                size={22}
                                aria-hidden="true"
                            />

                            <span className="hidden sm:inline">
                                Đăng nhập
                            </span>
                        </button>
                    </nav>

                </div>
            </Container>
        </header>
    );
};

export default Header;
