import { Button } from "@/components/ui/button"

export default function MenuBar({ category, handleCategoryChange }) {
    return (
        <>
            <div className="inline-flex w-full items-center gap-1 justify-start">
                <Button variant="outline" className={`shadow-none rounded-full text-xs border-2 border-transparent uppercase font-['Space_Mono'] font-bold tracking-tighter text-black cursor-pointer hover:bg-primary/20 hover:text-primary hover:rounded-full transition-all duration-200 ${category === "serif" ? "bg-primary text-white" : "bg-transparent border-primary border-2 text-primary"}`} onClick={() => handleCategoryChange("serif")}>
                    <span>serif</span>
                </Button>

                <Button variant="outline" className={`shadow-none rounded-full text-xs border-2 border-transparent uppercase font-['Space_Mono'] font-bold tracking-tighter text-black cursor-pointer hover:bg-primary/20 hover:text-primary hover:rounded-full transition-all duration-200 ${category === "sans-serif" ? "bg-primary text-white" : "bg-transparent border-primary border-2 text-primary"}`} onClick={() => handleCategoryChange("sans-serif")}>
                    <span>sans-serif</span>
                </Button>

                <Button variant="outline" className={`shadow-none rounded-full text-xs border-2 border-transparent uppercase font-['Space_Mono'] font-bold tracking-tighter text-black cursor-pointer hover:bg-primary/20 hover:text-primary hover:rounded-full transition-all duration-200 ${category === "display" ? "bg-primary text-white" : "bg-transparent border-primary border-2 text-primary"}`} onClick={() => handleCategoryChange("display")}>
                    <span>display</span>
                </Button>

                <Button variant="outline" className={`shadow-none rounded-full text-xs border-2 border-transparent uppercase font-['Space_Mono'] font-bold tracking-tighter text-black cursor-pointer hover:bg-primary/20 hover:text-primary hover:rounded-full transition-all duration-200 ${category === "monospace" ? "bg-primary text-white" : "bg-transparent border-primary border-2 text-primary"}`} onClick={() => handleCategoryChange("monospace")}>
                    <span>monospace</span>
                </Button>

                <Button variant="outline" className={`shadow-none rounded-full text-xs border-2 border-transparent uppercase font-['Space_Mono'] font-bold tracking-tighter text-black cursor-pointer hover:bg-primary/20 hover:text-primary hover:rounded-full transition-all duration-200 ${category === "handwriting" ? "bg-primary text-white" : "bg-transparent border-primary border-2 text-primary"}`} onClick={() => handleCategoryChange("handwriting")}>
                    <span>handwriting</span>
                </Button>
            </div>
        </>
    )
}