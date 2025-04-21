// components/Modal.tsx
"use client";

import { ReactNode } from "react";

export default function Modal({
  children,
  onClose,
}: {
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* затемнение + центрирование */}
      <div className="relative z-10">{children}</div>

      {/* при клике вне модалки — закрыть */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      ></div>
    </div>
  );
}
