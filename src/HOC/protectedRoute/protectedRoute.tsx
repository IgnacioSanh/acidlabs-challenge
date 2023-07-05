import { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import { COOKIE_TOKEN_NAME } from "_types/auth";

export default function ProtectedRoute({children}: PropsWithChildren) {
  const [cookie] = useCookies([COOKIE_TOKEN_NAME]);

  if (!cookie?.TOKEN) {
    return <Navigate to="/login" />
  }

  return children;
}