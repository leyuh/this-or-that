
import "./globals.css";


export const metadata = {
  title: "This or That",
  description: "Find out where your priorities really lie.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
