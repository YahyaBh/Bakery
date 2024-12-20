import "./globals.scss";


export const metadata = {
  title: "Bakery",
  description: "Get your favourite bakery products delivered to your doorstep",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
