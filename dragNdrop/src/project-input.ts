/** Decorators */
import { Autobind } from './decorators';

/** Utils */
import { Validatable, validate } from './utils';

export class ProjectInput {
  templateEl: HTMLTemplateElement;
  hostEl: HTMLElement;
  element: HTMLFormElement;
  titleInputEl: HTMLInputElement;
  descriptionInputEl: HTMLInputElement;
  peopleInputEl: HTMLInputElement;

  constructor() {
    /** Define elements and crate form from <template> to insert in DOM */
    this.templateEl = document.getElementById('project-input') as HTMLTemplateElement;
    this.hostEl = document.getElementById('app')!;

    const importedNode: DocumentFragment = document.importNode(this.templateEl.content, true);
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = 'user-input';

    this.titleInputEl = this.element.querySelector('#title') as HTMLInputElement;
    this.descriptionInputEl = this.element.querySelector('#description') as HTMLInputElement;
    this.peopleInputEl = this.element.querySelector('#people') as HTMLInputElement;

    this.attach();
    this.configure();
  }

  /** Add form from template to the page */
  private attach() {
    this.hostEl.insertAdjacentElement('afterbegin', this.element);
  }

  /** Set event listeners */
  private configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  @Autobind
  private submitHandler(e: Event) {
    e.preventDefault();

    const userInput = this.gatherUserInput();

    if (Array.isArray(userInput)) {
      const [title, description, people] = userInput;
      this.clearInputs();
      console.log(title, description, people);
    }
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputEl.value;
    const enteredDescription = this.descriptionInputEl.value;
    const enteredPeople = +this.peopleInputEl.value;

    const titleValidatable: Validatable = {
      value: enteredTitle,
      required: true,
    };
    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };
    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
    };
    if (
      !validate(titleValidatable) ||
      !validate(descriptionValidatable) ||
      !validate(peopleValidatable)
    ) {
      alert('Invalid input, please try again');
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputEl.value = '';
    this.descriptionInputEl.value = '';
    this.peopleInputEl.value = '';
  }
}
