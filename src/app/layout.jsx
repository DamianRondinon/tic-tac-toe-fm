"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Page from "./page";
import React from "react";
import { ModalState } from "./Context/ModalContext";
import { GameState } from "./Context/GameContext";
import { useClient } from "next/client";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModalState>
        <GameState>
          <body className={inter.className}>{children}</body>
        </GameState>
      </ModalState>
    </html>
  );
}

export { metadata };

/*  <body className={inter.className}>{children}</body>*/
