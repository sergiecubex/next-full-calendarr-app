// import '../styles/globals.css'
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../store";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout {...pageProps} />
    </Provider>
  );
}
