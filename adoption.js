var petImage = document.getElementById("pet-image");
var petName = document.getElementById("pet-name");
var petBreed = document.getElementById("pet-breed");
var petAge = document.getElementById("pet-age");
var petDescription = document.getElementById("pet-description");
var adoptButton = document.getElementById("adopt");

const selectedPetData = JSON.parse(localStorage.getItem("selectedPet"));

if (selectedPetData) {
    // Populate your HTML elements with selectedPet data
    petImage.src = selectedPetData.image;
    petName.textContent = selectedPetData.name;
    petBreed.textContent = selectedPetData.breed;
    petAge.textContent = selectedPetData.age;
    petDescription.textContent = selectedPetData.description;
    adoptButton.innerText = `Adopt ${selectedPetData.name}!`;
    document.title = `Adopt ${selectedPetData.name} at Shnugglers!`;
}