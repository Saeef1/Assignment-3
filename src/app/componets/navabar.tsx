export default function Navbar() {
    return (
        <>
            <div className=" text-white w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex items-center justify-between">
                <div className="w-[191px] h-[34px] flex gap-[10px]">
                    <svg width="37" height="30" viewBox="0 0 37 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_9_316)">
                            <path d="M0 2.86525V9.6182C0 11.6749 2.50611 12.7719 4.03763 11.3322L11.3471 4.5792C12.9483 3.1052 11.904 0.5 9.71119 0.5H2.40169C1.07902 0.5 0 1.56265 0 2.86525Z" fill="white" />
                            <path d="M34.5983 0.5H27.2888C25.1308 0.5 24.0517 3.1052 25.6529 4.5792L32.9624 11.3322C34.4939 12.7376 37 11.6749 37 9.6182V2.86525C37 1.56265 35.921 0.5 34.5983 0.5Z" fill="white" />
                            <path d="M20.1533 16.9884L32.9624 28.8489C34.4939 30.2543 37 29.1917 37 27.1349V20.3134C37 19.6621 36.7215 19.0451 36.2342 18.5995L20.1533 3.68814C19.2135 2.83117 17.7865 2.83117 16.8467 3.68814L0.765757 18.5995C0.278457 19.0451 0 19.6621 0 20.3134V27.1349C0 29.1917 2.50611 30.2886 4.03763 28.8489L16.8467 16.9884C17.7865 16.1314 19.2135 16.1314 20.1533 16.9884Z" fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_9_316">
                                <rect width="37" height="29" fill="white" transform="translate(0 0.5)" />
                            </clipPath>
                        </defs>
                    </svg>
                    <div className="font-bold text-[28px] leading-[33.89px] font-[inter] ">whitepace</div>
                </div>
                <div className="w-[737.5px] h-[60px] flex items-center gap-[60px] ">
                    <div className=" w-[549px] h-[23px] flex gap-8 text-[18px] leading-[23px] font-[] font-medium">
                        <div>Products</div>
                        <div>Solutions</div>
                        <div>Resources</div>
                        <div>Pricing</div>
                    </div>
                    <button className="w-[126px] h-[60px] py-4 px-10 bg-[#FFE492] font-medium rounded-lg text-[#043873] font-[inter] text-[18px]">Login</button>
                </div>
            </div>
        </>
    )
}