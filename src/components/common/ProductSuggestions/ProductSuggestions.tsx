import { useEffect, useRef, useState } from "react"
import { HiSparkles } from "react-icons/hi2"
import ProductCard from "@/components/common/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import type { ProductSuggestionsProps } from "./ProductSuggestions.types"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"

const ProductSuggestions = ({ limit }: ProductSuggestionsProps) => {
    const { products, loading, error } = useProducts()
    const scrollRef = useRef<HTMLDivElement>(null)
    const [canScrollLeft, setCanScrollLeft] = useState(false)

    const displayedProducts = limit ? products.slice(0, limit) : products

    const updateScrollState = () => {
        const el = scrollRef.current
        if (!el) return
        setCanScrollLeft(el.scrollLeft > 0)
    }

    useEffect(() => {
        const el = scrollRef.current
        if (!el) return

        updateScrollState()

        el.addEventListener("scroll", updateScrollState)
        window.addEventListener("resize", updateScrollState)

        return () => {
            el.removeEventListener("scroll", updateScrollState)
            window.removeEventListener("resize", updateScrollState)
        }
    }, [displayedProducts.length])

    const scrollByAmount = (direction: "left" | "right") => {
        const el = scrollRef.current
        if (!el) return

        const firstItem = el.firstElementChild as HTMLElement | null
        if (!firstItem) return

        const gap = 16
        const amount = firstItem.offsetWidth + gap

        el.scrollBy({
            left: direction === "left" ? -amount : amount,
            behavior: "smooth",
        })
    }

    return (
        <div className="relative mt-10 rounded-3xl bg-linear-to-br from-rose-100 via-white to-blue-200 p-6 pt-10 shadow-sm">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-lg">
                <div className="flex items-center gap-2 justify-center rounded-b-full bg-linear-to-t from-blue-400 to-blue-300 px-8 py-2.5 shadow-lg ">
                    <HiSparkles className="text-blue-100 text-lg" size={20} />
                    <h2 className="text-sm sm:text-base font-extrabold text-white tracking-wide whitespace-nowrap">
                        GỢI Ý CHO BẠN
                    </h2>
                </div>
            </div>

            <div className="mt-5 relative">
                {loading ? (
                    <div className="flex gap-4 overflow-hidden">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div
                                key={i}
                                className="aspect-3/4 w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)] shrink-0 rounded-2xl bg-white/70 animate-pulse"
                            />
                        ))}
                    </div>
                ) : error ? (
                    <p className="text-sm text-red-500 text-center">{error}</p>
                ) : displayedProducts.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center">Chưa có sản phẩm nào.</p>
                ) : (
                    <>
                        {/* Slider track */}
                        <div
                            ref={scrollRef}
                            className="flex gap-4 overflow-x-auto scroll-smooth [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden"
                        >
                            {displayedProducts.map((p) => (
                                <div
                                    key={p.id}
                                    className="shrink-0 w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2rem)/3)] md:w-[calc((100%-3rem)/4)] lg:w-[calc((100%-4rem)/5)]"
                                >
                                    <ProductCard {...p} />
                                </div>
                            ))}
                        </div>

                        {canScrollLeft && (
                            <button
                                type="button"
                                onClick={() => scrollByAmount("left")}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 flex items-center justify-center h-16 w-9 rounded-r-full bg-white/90 shadow-lg ring-1 ring-black/5 hover:bg-white transition"
                                aria-label="Previous"
                            >
                                <IoIosArrowBack size={24} />
                            </button>
                        )}

                        <button
                            type="button"
                            onClick={() => scrollByAmount("right")}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 flex items-center justify-center h-16 w-9 rounded-l-full bg-white/90 shadow-lg ring-1 ring-black/5 hover:bg-white transition"
                            aria-label="Next"
                        >
                            <IoIosArrowForward size={24} />
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default ProductSuggestions
