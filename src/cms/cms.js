import CMS from "netlify-cms-app";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ContactPagePreview from "./preview-templates/ContactPagePreview";
import CompetitionPagePreview from "./preview-templates/CompetitionPagePreview";
import NewsletterPagePreview from "./preview-templates/NewsletterPagePreview";
import TermsPagePreview from "./preview-templates/TermsPagePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("contact", ContactPagePreview);
CMS.registerPreviewTemplate("post", BlogPostPreview);
CMS.registerPreviewTemplate("competition", CompetitionPagePreview);
CMS.registerPreviewTemplate("newsletter", NewsletterPagePreview);
CMS.registerPreviewTemplate("terms", TermsPagePreview);
