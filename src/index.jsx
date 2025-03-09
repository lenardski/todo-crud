import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Content from "./components/Content"

createRoot(document.getElementById("root"))
    .render(
        <>
        <Header/>
        <Content/>
        </>
)