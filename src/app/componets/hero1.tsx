export default function Hero1() {
    return (
        <>
            <div className="w-[1920px] h-[829px] py-[140px] px-[220px] flex bg-[#043873] items-center font-[inter]">
                <div className="w-[656px] h-[361] flex flex-col gap-[60px] text-white">
                    <div className="w-[656px] h-[238px] flex flex-col gap-6">
                        <h2 className="font-bold text-[64px] leading-[77.45px]">Get More Done with whitepace</h2>

                        <p className="font-normal text-[18px] leading-[30px]">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    </div>
                    <button className="w-[219px] h-[63px] rounded-lg p-5 flex items-center gap-[10px] bg-[#4F9CF9]">
                        <p className="font-medium text-[17px] leading-[23px] ">Try Whitepace free</p>
                        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
                <div className="w-[824px] h-[549px]  bg-[#C4DEFD]"></div>
            </div>
        </>
    )
}