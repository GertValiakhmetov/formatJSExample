import React, { useState } from 'react'
import "./App.css"
import { IntlProvider } from 'react-intl';
import English from "./lang/en.json";
import French from "./lang/fr.json";
import Russian from "./lang/ru.json";
import BlablaComponent from "./BlablaComponent";


// IntlProvider - создает контекст и прокидывает user's current locale и словари


function App() {

    const [locale, setLocale] = useState("en");
    const dictionary = {en: English, fr: French, ru: Russian}

    return (
        <div className="App">
            <IntlProvider locale={locale} messages={dictionary[locale]}>
                <BlablaComponent setLocale = {setLocale} />
            </IntlProvider>
        </div>
    );
}
export default App;

