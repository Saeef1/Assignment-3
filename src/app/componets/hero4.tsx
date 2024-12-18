export default function Hero4() {
    return (
        <>
            <div className="w-[1920px] h-[574px] py-[140px] px-[220px] flex text-white bg-[#043873] items-center flex-col gap-[60px] font-[inter] ">
                <div className="w-[1064px] flex gap-6 text-center items-center flex-col">
                    <h1 className="text-[72px] leading-[87.14px] font-bold">Your work, everywhere you are</h1>

                    <p className="font-normal text-[17.6px] leading-[30px]">
                        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                    </p>
                </div>
                <button className="w-[171px] h-[63px] rounded-lg p-5 px-19 flex items-center gap-[10px] bg-[#4F9CF9]">
                    <p className="font-medium text-[17px] leading-[23px] ">Try Taskey</p>
                    <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>

            </div>
        </>
    )
}