import React, { Component } from "react";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  reset = () => {
    this.state = {};
  };

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Děkujume za podnět, co nejdříve se ozveme :)");
        this.reset();
      })
      .catch(error => alert(error));

    e.preventDefault();
  };

  render() {
    return <div>
      <h3 className="title is-h3">Máte námět? Dejte nám vědet!</h3>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <p hidden>
          <label>
            Don’t fill this out: <input name="bot-field"/>
          </label>
        </p>
        <div className="field">
          <label className="label">Jméno</label>
          <div className="control">
            <input className="input" type="text" name="name" id="name" placeholder="Jan Novák" onChange={this.handleChange}/>
          </div>
        </div>
        <div className="field">
          <label className="label">Kontakt</label>
          <div className="control">
            <input className="input" type="text" name="mail_or_phone" id="mail_or_phone" placeholder="E-mail / telefon"
                   onChange={this.handleChange}/>
          </div>
        </div>

        <div className="field">
          <label className="label">Zpráva</label>
          <div className="control">
            <textarea className="textarea" name="message" id="message" placeholder="Vaše zpráva..." onChange={this.handleChange}/>
          </div>
        </div>

        <div className="field is-grouped">
          <div className="control">
            <input type="submit" className="button is-link" value="Odeslat"/>
          </div>
          <div className="control">
            <input type="reset" className="button is-text" value="Zrušit"/>
          </div>
        </div>
      </form>
    </div>;
  }

}