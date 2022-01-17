import logo from "./logo.svg";
import "./App.css";
import { IntlProvider, FormattedMessage } from "react-intl";
import React from "react";

const messages = {
  "tr-TR": {
    title: "Merhaba Dünya !",
    description: "Tebrikler büyük ikramiyeyi kazandınız ! Kazandığınız tutar: {total} ",
  },
  "en-US": {
    title: "Hello World !",
    description: "Congratulations you won the JACKPOT ! The amount you earn : {total}",
  },
};

function App() {
  const isLocale = localStorage.getItem("locale");
  const defaultLocale = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = React.useState(defaultLocale);

  React.useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <div className="App">
      <IntlProvider locale={locale} messages={messages[locale]}>
        <FormattedMessage id="title"  />

        <p>
          <FormattedMessage values={{total: "$1.000.000"}} id="description" />
        </p>

        <br />
        <br />
        <button
          style={{
            margin: "2px",
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
            padding: "10px",
          }}
          onClick={() => setLocale("tr-TR")}
        >
          TR
        </button>
        <button
          style={{
            margin: "2px",
            cursor: "pointer",
            backgroundColor: "red",
            color: "white",
            padding: "10px",
          }}
          onClick={() => setLocale("en-US")}
        >
          EN
        </button>
      </IntlProvider>
    </div>
  );
}

export default App;
