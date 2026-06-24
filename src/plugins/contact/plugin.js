import { contactContent } from "./content.js";
import "./styles.css";

function field({ id, label, placeholder, type = "text", textarea = false }) {
    const input = textarea
        ? `<textarea id="${id}" name="${id}" rows="6" placeholder="${placeholder}"></textarea>`
        : `<input id="${id}" name="${id}" type="${type}" placeholder="${placeholder}" />`;

    return `
        <label class="contact__field" for="${id}">
            <span>${label}</span>
            ${input}
        </label>
    `;
}

export default {
    id: "contact",
    label: "Contact",
    enabled: true,
    routes: ["#/contact"],

    render(container) {
        container.innerHTML = `
            <main class="contact">
                <section class="contact__panel">
                    <div class="contact__copy">
                        <p class="contact__eyebrow">${contactContent.eyebrow}</p>
                        <h1>${contactContent.title}</h1>
                        <p class="contact__lead">${contactContent.lead}</p>
                        <p class="contact__body">${contactContent.body}</p>
                    </div>

                    <form class="contact__form" action="mailto:hello@example.com" method="post" enctype="text/plain">
                        ${field({
                            id: "name",
                            label: contactContent.fields.name,
                            placeholder: contactContent.placeholders.name
                        })}

                        ${field({
                            id: "email",
                            label: contactContent.fields.email,
                            placeholder: contactContent.placeholders.email,
                            type: "email"
                        })}

                        ${field({
                            id: "subject",
                            label: contactContent.fields.subject,
                            placeholder: contactContent.placeholders.subject
                        })}

                        ${field({
                            id: "message",
                            label: contactContent.fields.message,
                            placeholder: contactContent.placeholders.message,
                            textarea: true
                        })}

                        <button class="contact__button" type="submit">${contactContent.button}</button>
                        <p class="contact__note">${contactContent.note}</p>
                    </form>
                </section>
            </main>
        `;
    }
};
