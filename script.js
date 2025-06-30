const dropdown = document.getElementById("stateDropdown");
const itineraryBox = document.getElementById("itineraryBox");

dropdown.addEventListener("change", () => {
  if (dropdown.value) {
    itineraryBox.innerHTML = `<p>Showing itineraries for <strong>${dropdown.value}</strong>.</p>`;
  } else {
    itineraryBox.innerHTML = `
      <img src="https://i.imgur.com/qIufhof.png" alt="No Itinerary" />
      <h3>No Itineraries Found</h3>
      <p>Select a state to view itineraries from our travel partners.</p>
      <button class="btn">Browse Destinations</button>
    `;
  }
});
