// import '../styles/globals.css'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import type { AppProps } from 'next/app'
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout {...pageProps} />
}
