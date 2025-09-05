"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ReactNode, use } from "react";
import { useAuth } from "@clerk/nextjs"
import { ConvexProviderWithClerk } from "convex/react-clerk";
const Convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return <ConvexProviderWithClerk client={Convex} useAuth={useAuth}>
    {children}</ConvexProviderWithClerk>;
}