import Circle from "./circle"
export default function Hero2() {
    return (
        <>
            <div className="w-[1,920px] h-[1588px] font-[inter] py-[140px] px-[220px] flex flex-col gap-[100px]">
                <div className="w-[1480px] h-[547px] gap-[60px] flex items-center ">
                    <div className=" flex flex-col gap-[60px] w-[672px] h-[411px] " >
                        <div className="flex flex-col gap-6 h-[288px]">
                            <h1 className="font-bold text-[72px] leading-[87.14px]">Project Management</h1>

                            <p className="font-normal text-[17.6px] leading-[30px]">
                                Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
                            </p>
                        </div>
                        <button className="w-[201px] h-[63px] rounded-md p-5 px-10 flex items-center gap-[10px] bg-[#4F9CF9]">
                            <p className="font-medium text-[17px] text-white leading-[23px] ">Get Started</p>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="w-[748px] h-[547px] bg-[#C4DEFD]">

                    </div>
                </div>

                <div className="w-[1480px] h-[661px] flex items-center gap-[100px]">
                    <div className="w-[710px] h-[661px] " >
                        {/* the design should be here  */}
                        <Circle />
                    </div>

                    <div className=" flex flex-col gap-[60px] w-[670px] h-[294px] " >
                        <div className="flex flex-col gap-6 h-[171px]">
                            <h1 className="font-bold text-[72px] leading-[87.14px]">Work together</h1>

                            <p className="font-normal text-[18px] leading-[30px]">
                                With whitepace, share your notes with your colleagues and collaborate on them.
                                You can also publish a note to the internet and share the URL with others.
                            </p>
                        </div>
                        <button className="w-[186px] h-[63px] rounded-md p-5 px-10 flex items-center gap-[10px] bg-[#4F9CF9]">
                            <p className="font-medium text-[17px] text-white leading-[23px] ">Try it now</p>
                            <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 5.5H11" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M6 0.5L11 5.5L6 10.5" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}