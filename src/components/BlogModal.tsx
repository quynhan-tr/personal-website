"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

interface BlogModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    content?: string;
}

export default function BlogModal({ isOpen, onClose, title, content }: BlogModalProps) {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                    >
                        <div className="bg-[#18191b] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col shadow-2xl pointer-events-auto">
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-start gap-4 bg-[#18191b]">
                                <h3 className="text-xl md:text-2xl text-white leading-tight">
                                    {title || "Blog Post"}
                                </h3>
                                <button
                                    onClick={onClose}
                                    className="p-1 rounded-full hover:bg-white/10 transition-colors"
                                    aria-label="Close modal"
                                >
                                    <IoClose size={24} className="text-white/70" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
                                <div
                                    className="prose prose-invert max-w-none prose-p:text-gray-300 prose-headings:text-white prose-a:text-blue-400"
                                    dangerouslySetInnerHTML={{ __html: content || "" }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
