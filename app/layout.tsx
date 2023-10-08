import "./globals.css";

export const metadata = {
  title: "Trello Clone",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"bg-[#F3F6F8]"}>{children}</body>
    </html>
  );
}