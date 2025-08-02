import FontList from "./font-list-view";
import SearchBox from "./SearchBox";
import Loader from "./Loader";
import SortSelector from "./sort-selector";

import Lottie from "lottie-react";
import logoLottie from "../../public/assets/logo.json";
import MenuBar from "./menu-bar";
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
        <div className="inline-flex flex-col sm:pt-6 pt-4 md:w-5/12 w-full container md:pl-20 md:pr-8 lg:pr-16 px-5 mx-auto gap-8 h-screen overflow-auto overflow-x-hidden">
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#2828280a_1px,transparent_1px)] bg-[size:16px_16px] opacity-32 z-0"></div>


            <div className="relative inline-flex flex-col gap-6 w-full">
                <Lottie className="w-16" animationData={logoLottie} loop={true} />


                <SearchBox onSearch={handleSearch} className="fixed" />

                <MenuBar category={category} handleCategoryChange={handleCategoryChange} className="w-full" />

                <SortSelector currentSort={currentSort} onSortChange={handleSortChange} />
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