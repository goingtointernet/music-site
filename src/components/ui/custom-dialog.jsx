"use client"

import React, { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { X } from 'lucide-react'


export function Dialog({ open, onOpenChange, children }) {
  // Close dialog when Escape key is pressed
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && open) {
        onOpenChange(false)
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, onOpenChange])

  // Prevent scrolling when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[20001]"
      onClick={() => onOpenChange(false)}
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
      <div onClick={(e) => e.stopPropagation()} className="overflow-y-auto">{children}</div>
    </div>
  )
}


export function DialogContent({ className, children }) {
  const contentRef = useRef(null)

  // Animation effect when the dialog appears
  useEffect(() => {
    const content = contentRef.current
    if (content) {
      content.style.opacity = "0"
      content.style.transform = "scale(0.95)"
      
      setTimeout(() => {
        content.style.opacity = "1"
        content.style.transform = "scale(1)"
      }, 10)
    }
  }, [])

  return (
    <div
      ref={contentRef}
      className={cn(
        "relative bg-black/70  w-[90%] max-h-[90vh] mx-auto backdrop-blur-xl border border-white/10 text-white max-w-3xl p-0 overflow-x-hidden overflow-y-auto rounded-xl shadow-[0_0_50px_rgba(255,255,255,0.1)] transition-all duration-300 z-[20001]",
        className
      )}
    >
      {children}
    </div>
  )
}

export function DialogClose({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full z-10 hover:bg-white/10 transition-colors"
      aria-label="Close dialog"
    >
      <X size={20} className="text-white" />
    </button>
  )
}
