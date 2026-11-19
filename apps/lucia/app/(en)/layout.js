import LocaleRoot from "../components/LocaleRoot";
import { localizedMetadata } from "../seo.js";

export const metadata = localizedMetadata("en");

export default function Layout({ children }) {
    return <LocaleRoot lang="en">{children}</LocaleRoot>;
}
