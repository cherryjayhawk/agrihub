import type { ReactNode } from "react";

import { ReduxProvider } from "@/redux/provider";

export default function MainLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <ReduxProvider>{children}</ReduxProvider>;
}

