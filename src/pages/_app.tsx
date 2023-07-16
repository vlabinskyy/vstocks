import React from "react";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	let a: number = 5;
	a = "5";
	Boolean(a);
	return <Component {...pageProps} />;
}
