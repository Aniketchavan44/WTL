
function greetUser(): void {
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const display = document.getElementById("display") as HTMLElement;

    const name: string = nameInput.value.trim();

    if (name === "") {
        display.innerText = "Please enter your name!";
    } else {
        display.innerText =
            `Hello, ${name}! Welcome to our TypeScript app.`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("greetBtn") as HTMLButtonElement;

    button.addEventListener("click", greetUser);
});
