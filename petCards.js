var pets;

    var petCard;
    var petId;

// Fetch the pet data from the JSON file
fetch('pets.json')
.then(response => response.json())
.then(data => {
    const petsContainer = document.querySelector('.pets-content'); // Assuming this is your container

    // Check if petsContainer exists
    if (!petsContainer) {
        console.error('Error: .pets-content not found in the DOM.');
        return;
    }

    pets = data;
    data.forEach(pet => {
        petCard = document.createElement('div');
        petCard.classList.add('card');

        // Determine background color based on gender
        if (pet.gender.toLowerCase() === 'female') {
            petCard.classList.add('female'); // Add female class
        } else if (pet.gender.toLowerCase() === 'male') {
            petCard.classList.add('male'); // Add male class
        }

        petCard.innerHTML = `
            <a href="adoption.html" target="_blank">
              <div class="card-image" data-pet-id=${pet.id}>
                  <img src="${pet.image}" alt="${pet.name}">
              </div>
              <div class="card-text">
                  <h3>${pet.name}</h3>
                  <div class="pet-breed-age">
                    <p>${pet.breed}</p>
                    <p>${pet.age}</p>
                  </div>
              </div>
            </a>
        `;
        petCard.addEventListener("click", onClickPetCard);

        petsContainer.appendChild(petCard);
    });
})
.catch(error => console.error('Error fetching pet data:', error));



function onClickPetCard(num) {
    petId = num == 1 ? 1 : this.querySelector('.card-image').getAttribute("data-pet-id");
    const selectedPet = pets.find(pet => pet.id == petId);
    localStorage.setItem("selectedPet", JSON.stringify(selectedPet));
    window.location.href = "adoption.html";
};

function scrollToSectionPetCards(section, file) {
    if (section === "form-container"){
        onClickPetCard(1);
    }
    window.location.href = `${file}.html#${section}`;
}


