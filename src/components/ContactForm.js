import React, { Component } from "react";

export class ContactForm extends Component {
  render() {
    return <div>
      <h3 className="title is-h3">Máte námět? Dejte nám vědet!</h3>
      <form name="Contact" method="post" action="/form-success" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="bot-field"/>
        <div className="field">
          <label className="label">Jméno</label>
          <div className="control">
            <input className="input" type="text" name="name" id="name" placeholder="Jan Novák"/>
          </div>
        </div>
        <div className="field">
          <label className="label">Kontakt</label>
          <div className="control">
            <input className="input" type="text" name="mail_or_phone" id="mail_or_phone" placeholder="E-mail / telefon"/>
          </div>
        </div>

        <div className="field">
          <label className="label">Zpráva</label>
          <div className="control">
            <textarea className="textarea" name="message" id="message" placeholder="Vaše zpráva..." />
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <input type="submit" className="button is-link" value="Odeslat" />
          </div>
          <div className="control">
            <input type="reset" className="button is-text" value="Zrušit" />
          </div>
        </div>
      </form>
    </div>
  }

}