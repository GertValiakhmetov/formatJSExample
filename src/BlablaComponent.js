import React from "react";
import {FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, useIntl} from "react-intl";

// Обернув наше приложение в IntlProvider мы можем использовать компоненты FormatJS внутри нашего приложения


const BlablaComponent = ( {setLocale} ) => {
    const date = new Date(1459832991883);
    // Создаем инстанс intl используя хук useIntl() для декларативного использования в дальнейшем.
    // инстанс подписан на locale и messages позволяя постоянно сустейнить свежие данные в рантайме.
    const intl = useIntl();

    return (
        <>
        <header className="App-header">
            <p>
                {/* Для примера мы можем использовать FormattedMessage. id - айдишник перевода в json файлах (app.header и тд) */}
                <FormattedMessage
                    id = "app.header"
                    defaultMessage="Edit the files and save to reload"
                />
            </p>
            <p>
                <FormattedMessage
                    id = "app.content"
                    defaultMessage="Learn React"
                />
            </p>
            <p>
                {/* FormattedMessage поддерживает много пропсов так же как и intl объект. https://formatjs.io/docs/react-intl/api#formatmessage*/}
                <FormattedMessage
                    id = "app.channel.plug"
                    defaultMessage="Test text"
                    values={{variable: intl.locale, strong: (word) => {
                           return <strong>{word}</strong>
                        }}}
                />
            </p>
        </header>
    <main>
        <div className="examples">
            {/* В некоторых моментах мы не сможем использовать готовые компоненты FormatJS, на помощь приходят imperative API - https://formatjs.io/docs/react-intl/api */}
            <input placeholder={intl.formatMessage({id: "app.placeholder"})}/>
            <p>
                <FormattedDate value={date} />
            </p>
            <p>
                <FormattedTime value={date} />
            </p>
            <p>
                <FormattedNumber value={322} style="currency" currency="USD" />
            </p>
        </div>
        <div className="switch">
            <p onClick={() => setLocale("en")}>En</p>
            <p onClick={() => setLocale("fr")}>Fr</p>
            <p onClick={() => setLocale("ru")}>Ru</p>
        </div>
    </main>
            </>
    )
}

export default BlablaComponent;
