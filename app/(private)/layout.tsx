import { ReactNode } from "react";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <main className="container my-6 mx-auto">{children}</main>
      </header>
    </>
  );
}
