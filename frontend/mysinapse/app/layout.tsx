import { Metadata } from "next";


export const metadata: Metadata={
  title: "MySinapse",
  description: "Created by Matheus Zauos"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
