class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:3000";

    // requirement
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }

  handleClick() {
    console.log("button clicked");
    console.log(this.server);
  }
}

const app = new React();
