import React from 'react'

export const Modal = ({
                          isVisible,
                          onClose,
                          children,
                      }: {
    isVisible: boolean
    onClose: () => void
    children: React.ReactNode
}) => {
    if (!isVisible) return null
    console.log("modal", isVisible)
    const handleClose = (e: any) => {
        if (e.target.id === 'wrapper') onClose()
    }
    return (
        <>
            <div
                className={`fixed inset-0 flex justify-center items-center z-11 transition-colors ${isVisible ? "visible bg-black/20" : "invisible"} `}
                id="wrapper"
                onClick={handleClose}
            >
                <div
                    className={`bg-white rounded-lg shadow px-10 py-6 transition-all w-3/5 
                    ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"} `}
                    onClick={(e) => e.stopPropagation()}
                    // className="w-7/12 h-[80%] flex flex-col justify-center overflow-hidden"
                >
                    <button
                        className="absolute top-2 right-2 py-1 px-2 border berder-neutral-200 rounded-md
                        text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                        // className="text-white text-xl place-self-end"
                        onClick={() => onClose()}
                    >
                        X
                    </button>
                    <div className="bg-white rounded overflow-y-auto">{children}</div>
                </div>
            </div>
        </>
    )
}
