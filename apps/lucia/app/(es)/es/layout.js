import LocaleRoot from "../../components/LocaleRoot";
import { localizedMetadata } from "../../seo.js";

export const metadata = localizedMetadata("es");

export default function Layout({ children }) {
    return <LocaleRoot lang="es">{children}</LocaleRoot>;
}
