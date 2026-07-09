import { useEffect } from "react";
import config from "../config";

export default function Meta() {
    useEffect(() => {
        document.title = config.siteTitle;
        const desc = document.querySelector('meta[name="description"]');
        if (desc) desc.setAttribute("content", config.meta.description);
        const author = document.querySelector('meta[name="author"]');
        if (author) author.setAttribute("content", config.meta.author);
        const keywords = document.querySelector('meta[name="keywords"]');
        if (keywords) keywords.setAttribute("content", config.meta.keywords);
        const theme = document.querySelector('meta[name="theme-color"]');
        if (theme) theme.setAttribute("content", config.theme.backgroundLight);
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", config.siteTitle);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", config.meta.description);
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage) ogImage.setAttribute("content", config.openGraph.image);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", config.openGraph.url);
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute("content", config.siteTitle);
        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute("content", config.meta.description);
        const twImage = document.querySelector('meta[name="twitter:image"]');
        if (twImage) twImage.setAttribute("content", config.openGraph.image);
    }, []);

    return null;
}
