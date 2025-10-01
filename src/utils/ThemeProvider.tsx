"use client";
import {ThemeProvider as NextThemesProvider} from "next-themes";
import type { ReactNode } from "react";
interface childrenProp {
    children: ReactNode;
}


export default function ThemeProvider({children, ...props} : childrenProp) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}