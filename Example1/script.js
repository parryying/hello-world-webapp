document.addEventListener("DOMContentLoaded", () => {
    const alphabetGrid = document.getElementById("alphabetGrid");
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    // Populate the grid with letters
    alphabet.forEach(letter => {
        const letterDiv = document.createElement("div");
        letterDiv.classList.add("letter");
        letterDiv.textContent = letter;

        // Add click event to each letter
        letterDiv.addEventListener("click", () => {
            const popup = document.createElement("div");
            popup.classList.add("popup");
            popup.innerHTML = `
                <div class="popup-content">
                    <img src="images/${letter}.png" alt="${letter}" />
                    <p>${letter} is for ...</p>
                </div>
            `;
            document.body.appendChild(popup);

            // Add animation and close functionality
            setTimeout(() => popup.classList.add("show"), 10);
            popup.addEventListener("click", () => {
                popup.classList.remove("show");
                setTimeout(() => popup.remove(), 300);
            });
        });

        alphabetGrid.appendChild(letterDiv);
    });
});
