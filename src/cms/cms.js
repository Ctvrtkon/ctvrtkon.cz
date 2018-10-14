import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
