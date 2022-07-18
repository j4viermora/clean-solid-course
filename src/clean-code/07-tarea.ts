(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  interface HtmlElementProps {
    id: string;
    type: HtmlType;
  }

  class HtmlElement {
    constructor({ id, type }: HtmlElementProps) {}
  }

  interface InputAttributesProps {
    value: string;
    placeholder: string;
  }

  class InputAttributes {
    public placeholder = string;
    public value = string;

    constructor({ placeholder, value }: InputAttributesProps) {
      (this.placeholder = placeholder), (this.value = value);
    }
  }

  interface InputEventsProps {
    value: string;
    placeholder: string;
    id: string;
  }

  class InputEvents {
    setFocus() {}
    getValue() {}
    isActive() {}
    removeValue() {}
  }

  //? Idea para la nueva clase InputElement

  interface InputElementProps {

        name: string;
        placeholder: string;
        value: string;
        id: string;
      }

  class InputElement {
    public htmlElement = HtmlElement;
    public inputAttributes = InputAttributes;
    public inputEvents = InputEvents;

    constructor({
      name,
      placeholder,
      value,
    }: InputElementProps) {
      this.htmlElement = new HtmlElement({ id, type: "input" });
      this.inputAttributes = new InputAttributes({
        placeholder,
        value,
      });
      this.inputEvents = new this.inputEvents();
    }
  }

  const nameField = new InputEvents("Fernando", "Enter first name", "txtName");

  console.log({ nameField });
})();
