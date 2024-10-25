# Shnugglers - Connecting Pets with People

Shnugglers is a heartwarming pet adoption website dedicated to connecting loving families with their future furry companions. Our mission is to ensure that every pet finds a forever home, highlighting a diverse range of adorable dogs, cats, and other animals, each with their unique personality and story. With a user-friendly interface, potential adopters can easily browse through available pets and learn about their characteristics, making the adoption process joyful and transparent. Join us at Shnugglers, where love knows no bounds, and together, let’s create lasting connections that enrich lives.

This assignment has been created by Arundhati Bandopadhyaya (NUID: 002313855) as part of assignment 6 for INFO6150 course taught by Prof. Vishal Chawla.

## Website Features
- Created two HTML pages
  - **index.html**: contains the landing page with the pet-details-container containing the pet-cards
  - **adoption.html**: clicking on a pet-card opens up this page with details about the pet and how to adopt them
- User can choose to view the website in dark or light mode
- Website is responsive to be accessed through different devices
- Uses a JSON file containing pet information based on which the adoption.html page is populated
- Contains an adoption form complete with validation
- Contains a navbar for desktop view. The navbar has a backdrop filter that blurs content on a lower z-index on scroll
- All links and buttons are functional
- The SASS files have been placed in different folders as per page layouts for organization purposes
- UI is Rich with multiple features
- Readme included

## SASS Features:
- **Variables**: Created variables for primary-color, secondary-color and fonts in `_config.scs`s and implemented throughout the website
- **Custom Properties**: Created custom properties for background-color and font-color in `_config.scss` and used to switch between dark and light theme
- **Nesting**: Implemented in all sass files
- **Interpolation**: Implemented inside _theme-mode_ mixin in `_config.scss` to switch between themes based on selected mode
- **Placeholder Selectors**: Implemented the _flex-center_ placeholder selector in `_style.scss` and extended in `_footer.scss`
- **Mixin**: Implemented the _theme-mode_ mixin in `config.scss` to switch between themes
- **Functions**: Created the _theme-color_ function in `config.scss` and called it in the _theme-mode_ mixin

## Additional SASS Features:
- **Parent Selector**- used parent selector in `_button.scss` to create special styles for button in hover state
- **Each Loop**- used each loop in `pets.scss` to color pet cards as per the animal's gender (primary-color for males and secondary-color for females)
- **Color Manipulation**- used the `darken` color manipulation attribute to set gender-based pet card colors in `_config.scss`
- **Media Query**- used media query in `_mobile.scss` to make website responsive for mobile view

## CSS Grid and Flexbox
- **Grid**: used in a variety of places like pet-details-container, footer-container, process-container, form-container etc.
- **Flexbox**: used throughout the website like in about-container, footer-container, form-container, hero-container etc.

## Instructions to Run Code
Please run the website through the VSCode Live Server extension to avoid CORS issues.
