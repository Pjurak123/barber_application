import { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
import "../../styles/globals.css";
import Navigation from "../../components/Layout/Navigation";

export default function App({
  Component,
  pageProps: { ...pageProps },
}: AppProps) {
  return (
    <div>
      <div>
        <Component {...pageProps} />
      </div>
    </div>
  );
}
