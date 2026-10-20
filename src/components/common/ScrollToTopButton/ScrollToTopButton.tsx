import { useEffect, useState } from "react"
import type { ScrollToTopButtonProps } from "./ScrollToTopButton.types"
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md"

const ScrollToTopButton = ({ threshold = 300 }: ScrollToTopButtonProps) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > threshold)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [threshold])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!visible) return null

    return (
        <button
            type="button"
            onClick={scrollToTop}
            aria-label="Quay lại đầu trang"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 rounded-xl bg-blue-400 px-4 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-blue-500"
        >
            <span>Lên đầu</span>
            <MdOutlineKeyboardDoubleArrowUp aria-hidden="true" size={18}/>
        </button>
    )
}

export default ScrollToTopButton
