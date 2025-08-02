/**
 * Side Bar Component
 * 
 * The main sidebar that contains the font list, search, filters, and controls.
 * This component handles the left panel of the application layout.
 * 
 * Features:
 * - Font search functionality
 * - Category and sort filtering
 * - Font list display with loading states
 * - Responsive design for mobile and desktop
 */

'use client'

import FontList from "./font-list-view";
import SearchBox from "./SearchBox";
import Loader from "./loader";
import SortSelector from "./sort-selector";
import Lottie from "lottie-react";
import logoLottie from "../../public/assets/logo.json";
import CategorySelector from "./category-selector";
/**
 * Side Bar Component Props
 * @param {Function} handleSearch - Function to handle search input
 * @param {string|null} category - Current selected category filter
 * @param {boolean} loading - Loading state for UI feedback
 * @param {Array} fonts - Array of filtered fonts to display
 * @param {Array} tempfonts - Limited array of fonts for performance (max 100)
 * @param {Array} allfonts - Complete array of all fonts
 * @param {Function} handleClick - Function to handle font selection
 * @param {Function} handleCategoryChange - Function to handle category filter changes
 * @param {Function} handleSortChange - Function to handle sort parameter changes
 * @param {string} currentSort - Current sort parameter
 */
export default function SideBar({
    handleSearch,
    category,
    loading,
    fonts,
    tempfonts,
    allfonts,
    handleClick,
    handleCategoryChange,
    handleSortChange,
    currentSort
}) {
    return (
        <div className="inline-flex flex-col sm:pt-6 pt-4 md:w-5/12 lg:w-1/3 w-full container px-12 mx-auto gap-8 h-screen overflow-auto overflow-x-hidden bg-neutral-50 border-r border-gray-100 ">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#2828280a_1px,transparent_1px)] bg-[size:16px_16px] opacity-32 z-0"></div>


            <div className="relative inline-flex flex-col gap-6 w-full">
                <div className="inline-flex w-full justify-between gap-2">
                    <Lottie className="w-16" animationData={logoLottie} loop={true} />
                    <SearchBox onSearch={handleSearch} className="w-40" />
                </div>
                {/* <div className="inline-flex flex-col w-full"> */}
                <CategorySelector category={category} handleCategoryChange={handleCategoryChange} className="w-full" />
                <SortSelector currentSort={currentSort} onSortChange={handleSortChange} />
                {/* </div> */}
            </div>

            {loading ? (
                <div className="flex justify-center">
                    <Loader />
                </div>
            ) : (
                <div className="relative inline-flex flex-col gap-4 overflow-auto">
                    <p className="font-semibold font-['Space_Mono'] uppercase text-sm text-gray-400 tracking-tighter">
                        Showing {fonts && tempfonts.length} of{" "}
                        {allfonts && allfonts.length} fonts
                    </p>
                    <FontList
                        fonts={tempfonts}
                        allfonts={allfonts}
                        cardClick={handleClick}
                    />
                </div>
            )}

        </div>
    );
}