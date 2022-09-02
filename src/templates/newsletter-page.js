import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Content, {HTMLContent} from "../components/Content";
import Layout from "../components/Layout";
import Helmet from "react-helmet";

export const NewsletterPageTemplate = ({title, content, contentComponent}) => {
    const PageContent = contentComponent || Content;

    return (
        <div>
            <Helmet title={`Newsletter | Čtvrtkon.cz`}/>
            <h2 className="title is-h2">{title}</h2>
            <PageContent className="content" content={content}/>
        </div>
    );
};

NewsletterPageTemplate.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string,
    contentComponent: PropTypes.func
};

const html = `
       <link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">
       <div id="mc_embed_signup" class="is-marginless">
                <form
                    action="https://gmail.us10.list-manage.com/subscribe/post?u=90cdb2604468f02a0fde1fae3&amp;id=437e6b95bc&amp;f_id=00cb2be2f0"
                    method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate is-marginless"
                    target="_blank" novalidate>
                    <div id="mc_embed_signup_scroll">
                        <h2>Odebírat novinky</h2>
                        <div class="indicates-required"><span class="asterisk">*</span> povinné pole</div>
                        <div class="mc-field-group">
                            <label for="mce-EMAIL"> Váš e-mail <span class="asterisk">*</span>
                            </label>
                            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL"
                                   required/>
                        </div>
                        <div class="mc-field-group input-group">
                            <strong>Jaká oblast vás zajímá? </strong>
                            <ul>
                                <li>
                                    <input type="checkbox" value="1" name="group[364468][1]"
                                           id="mce-group[364468]-364468-0"/>
                                    <label for="mce-group[364468]-364468-0">Marketing</label>
                                </li>
                                <li>
                                    <input type="checkbox" value="2" name="group[364468][2]"
                                           id="mce-group[364468]-364468-1"/>
                                    <label for="mce-group[364468]-364468-1">Programování</label>
                                </li>
                                <li>
                                    <input type="checkbox" value="4" name="group[364468][4]"
                                           id="mce-group[364468]-364468-2"/>
                                    <label for="mce-group[364468]-364468-2">UX/Design</label>
                                </li>
                            </ul>
                        </div>
                        <div id="mce-responses" class="clear foot">
                            <div class="response" id="mce-error-response" style="display:none"></div>
                            <div class="response" id="mce-success-response" style="display:none"></div>
                        </div>
                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text"
                                   name="b_90cdb2604468f02a0fde1fae3_437e6b95bc"
                                   tabindex="-1"
                                   value=""/>
                        </div>
                        <div class="optionalParent">
                            <div class="clear foot">
                                <input type="submit" value="Odebírat novinky" name="subscribe"
                                       id="mc-embedded-subscribe" class="button" />
                                    <p class="brandingLogo">
                                        <a href="http://eepurl.com/h9ZI1b"
                                           title="Mailchimp - email marketing made easy and fun"><img
                                            src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg" />
                                        </a>
                                    </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <script type='text/javascript'
                    src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
            <script
                type='text/javascript'>
                
                window.fnames = new Array();
window.ftypes = new Array();
fnames[0] = 'EMAIL';
ftypes[0] = 'email';
fnames[3] = 'ADDRESS';
ftypes[3] = 'address';
fnames[4] = 'PHONE';
ftypes[4] = 'phone';
fnames[5] = 'BIRTHDAY';
ftypes[5] = 'birthday'; /*
     * Translated default messages for the $ validation plugin.
     * Locale: CS
     */
$.extend($.validator.messages, {
    required: "Tento údaj je povinný.",
    remote: "Prosím, opravte tento údaj.",
    email: "Prosím, zadejte platný e-mail.",
    url: "Prosím, zadejte platné URL.",
    date: "Prosím, zadejte platné datum.",
    dateISO: "Prosím, zadejte platné datum (ISO).",
    number: "Prosím, zadejte číslo.",
    digits: "Prosím, zadávejte pouze číslice.",
    creditcard: "Prosím, zadejte číslo kreditní karty.",
    equalTo: "Prosím, zadejte znovu stejnou hodnotu.",
    accept: "Prosím, zadejte soubor se správnou příponou.",
    maxlength: $.validator.format("Prosím, zadejte nejvíce {0} znaků."),
    minlength: $.validator.format("Prosím, zadejte nejméně {0} znaků."),
    rangelength: $.validator.format("Prosím, zadejte od {0} do {1} znaků."),
    range: $.validator.format("Prosím, zadejte hodnotu od {0} do {1}."),
    max: $.validator.format("Prosím, zadejte hodnotu menší nebo rovnu {0}."),
    min: $.validator.format("Prosím, zadejte hodnotu větší nebo rovnu {0}.")
});
}
(jQuery)
)
;var $mcj = jQuery.noConflict(true);
</script>
`

const NewsletterPage = ({data}) => {
    const {markdownRemark: post} = data;

    return (
        <Layout>
            <NewsletterPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
            <div dangerouslySetInnerHTML={{__html: html}}/>
        </Layout>
    );
};

NewsletterPage.propTypes =
    {
        data: PropTypes.object.isRequired
    }
;

export default NewsletterPage;

export const newsletterPageQuery = graphql`
query NewsletterPage($id: String!)
    {
        markdownRemark(id
    :
        {
            eq: $id
        }
    )
        {
            html
            frontmatter
            {
                title
            }
        }
    }
`;
