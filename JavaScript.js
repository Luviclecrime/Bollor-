// script.js

// Fonction pour ouvrir le messagebox
function openMessageBox(bol) {
  const overlay = document.createElement('div');
  overlay.className = 'messagebox-overlay';
  document.body.appendChild(overlay);

  const messagebox = document.createElement('div');
  messagebox.className = 'messagebox';
  messagebox.innerHTML = `
    <span class="close">&times;</span>
    <h5>${bol.name}</h5>
    <img src="${bol.img}" alt="${bol.name}" style="max-width: 100%; height: auto;">
    <p>Prix: ${bol.price} XAF</p>
    <div class="buy-button">
      <button class="cancel">Annuler</button>
      <button class="buy">Acheter</button>
    </div>
  `;

