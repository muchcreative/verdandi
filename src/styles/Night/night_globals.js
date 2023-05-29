/**
 * Next.js only accepts one global.css file, NightGlobals component overrides globals.css
 */
export default function nightGlobals() {
    return (
        <style jsx global>{`
            html
            body {
                color: var(--day-bg-color);
                background-color: var(--night-bg-color);
                overflow-x: hidden;
                overflow-y: scroll;
            }

            main {
                height: 200vh;
            }

            h1 {
                font-size: 4.9em;
                font-weight: normal;
            }

            h2 {
                font-size: 3.2em;
                font-weight: normal;
            }

            h3 {
                color: var(--night-special-color);
                font-size: 2.3em;
                font-weight: normal;
            }

            h4 {
                font-family: "Times New Roman";
                font-weight: normal;

                font-size: 2.6em;
                line-height: 1.7em;
                margin-left: 3em;
                padding-left: 2.5em; 
                text-indent: -2.5em;
            }

            em {
                font-size: inherit;
                font-style: normal;  
                color: var(--night-special-color);
                text-decoration: var(--night-special-color) 3px underline;
                text-underline-offset: 3px;
            }

            a {
                color: inherit;
                font-family: 'Times New Roman';
                font-size: 1em;
                text-decoration: inherit;
            }

            input {
                font-family: "Times New Roman";
                color: #ffffffe6;
                background-color: inherit;
                font-size: 1.2em;
            }

            input::placeholder {
                color: inherit;
            }

            textarea {
                background: inherit;
                color: #ffffffe6;
                font: inherit;
                border: none;
                overflow: auto;
                outline: none;
                box-shadow: none;
                resize: none;
            }

            textarea::placeholder {
                color: inherit;
            }

            button {
                background: none;
                color: inherit;
                border: none;
                padding: 0;
                font: inherit;
                cursor: pointer;
                outline: inherit;
            }

            footer {
                font-size: 3em;
            }
        `}
        </style>
    )
}