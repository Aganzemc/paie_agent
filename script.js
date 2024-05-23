// Liste d'exemple des agents avec leurs informations
const agents = [
    { id: 1, nom: 'Agent A', paie: 3000 },
    { id: 2, nom: 'Agent B', paie: 3500 },
    { id: 3, nom: 'Agent C', paie: 4000 },
    { id: 4, nom: 'Agent U', paie: 6000 },
];

// Fonction pour générer les lignes du tableau avec les liens
function genererTableau() {
    const tableBody = document.querySelector('#agentsTable tbody');

    agents.forEach(agent => {
        const tr = document.createElement('tr');

        const tdId = document.createElement('td');
        tdId.textContent = agent.id;
        tr.appendChild(tdId);

        const tdNom = document.createElement('td');
        tdNom.textContent = agent.nom;
        tr.appendChild(tdNom);

        const tdAction = document.createElement('td');
        const lienPaie = document.createElement('a');
        lienPaie.href = `paie.html?id=${agent.id}`;
        lienPaie.textContent = 'Voir la paie';
        tdAction.appendChild(lienPaie);
        tr.appendChild(tdAction);

        tableBody.appendChild(tr);
    });
}

// Appel de la fonction pour générer le tableau au chargement de la page
document.addEventListener('DOMContentLoaded', genererTableau);
