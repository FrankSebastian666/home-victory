import "@picocss/pico/css/pico.css";
import "./../globals.css";

export default function Layout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}
