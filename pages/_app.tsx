import type { AppProps } from "next/app";
import { PageWrapper } from "layouts";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PageWrapper>
            <Component {...pageProps} />
        </PageWrapper>
    );
}

export default MyApp;
