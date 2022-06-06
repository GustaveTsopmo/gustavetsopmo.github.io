import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="dark" attribute="class">
      <NextNProgress
        color="#0ea5e9"
        height={4}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}