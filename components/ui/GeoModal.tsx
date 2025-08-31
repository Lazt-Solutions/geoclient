"use client"

import { cn } from "@/lib/utils/cn"
import { ReactNode } from "react"

type ModalProps = {
    isOpen: boolean
    onClose: () => void
    children: ReactNode
    className?: string
    overlayClassName?: string
}

export function Modal({ isOpen, onClose, children, className, overlayClassName }: ModalProps) {

    if (!isOpen) return null

    return (
        <>
            {/* Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-30 bg-background/80 transition-opacity duration-300",
                    overlayClassName ?? ""
                )}
                onClick={onClose}
                aria-hidden="true"
            />

            {/* Modal content */}
            <div className="fixed inset-0 max-w-lg z-40 flex justify-center items-start pt-20 px-4 sm:px-0">
                <div className={cn("relative w-full rounded-lg shadow-lg", className)}>
                    {children}
                </div>
            </div>
        </>
    )
}
