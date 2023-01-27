class footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `

      <hr />
      <section class="text-center">
      <p>© Tom Green 2023</p>
      </section>


      `;
    }
  }
  
  customElements.define('footer-component', footer);