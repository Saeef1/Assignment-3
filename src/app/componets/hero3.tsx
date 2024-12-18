export default function Hero3() {
    return (
        <>
            <div className="w-[1920px] h-[759px] py-[140px] px-[220px] flex bg-[#043873] gap-[98px] items-center font-[inter]">
                <div className="w-[697px] h-[294px] flex flex-col gap-[60px] text-white">
                    <div className="h-[171px] flex flex-col gap-6">
                        <h1 className="font-bold text-[72px] leading-[87.14px]">Use as Extension</h1>

                        <p className="font-normal text-[17.6px] leading-[30px]">
                            Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                        </p>
                    </div>
                    <button className="w-[171px] h-[63px] rounded-md p-5 px-10 flex items-center gap-[10px] bg-[#4F9CF9]">
                        <p className="font-medium text-[17px] leading-[23px] ">Let's Go</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <div className="w-[686px] h-[479px]  bg-[#C4DEFD]"></div>
            </div>
            <div className="w-[1920px] h-[812.09px] py-[140px] px-[220px] flex gap-[98px] items-center font-[inter]">
                <div className="w-[714px] h-[532.09px]  bg-[#C4DEFD]"></div>

                <div className="w-[669px] h-[411px] flex flex-col gap-[60px] ">
                    <div className="h-[288px] flex flex-col gap-6">
                        <h1 className="font-bold text-[72px] leading-[87.14px]">Customise it
                            to your needs</h1>

                        <p className="font-normal text-[18px] leading-[30px]">
                            Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                    </div>
                    <button className="w-[171px] h-[63px] rounded-lg p-5 px-10 flex items-center gap-[10px] bg-[#4F9CF9]">
                        <p className="font-medium text-[17px] leading-[23px] text-white">Let's Go</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>

            </div>
        </>
    )
}