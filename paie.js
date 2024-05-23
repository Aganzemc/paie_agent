// Liste d'exemple des agents avec leurs informations (même structure que dans script.js)
const agents = [
    { id: 1, nom: 'Agent A', paie: 3000 },
    { id: 2, nom: 'Agent B', paie: 3500 },
    { id: 3, nom: 'Agent C', paie: 4000 },
    { id: 4, nom: 'Agent U', paie: 6000 },
];

// Fonction pour récupérer les paramètres de l'URL
function getQueryParams() {
    const params = {};
    window.location.search.substring(1).split("&").forEach(param => {
        const [key, value] = param.split("=");
        params[key] = decodeURIComponent(value);
    });
    return params;
    
}

// Fonction pour afficher les détails de l'agent
function afficherDetailsAgent() {
    const params = getQueryParams();
    const agentId = parseInt(params.id, 10);
    const agent = agents.find(agent => agent.id === agentId);

    if (agent) {
        const detailsDiv = document.getElementById('agentDetails');
        detailsDiv.innerHTML = `
            <p><strong>ID:</strong> ${agent.id}</p>
            <p><strong>Nom:</strong> ${agent.nom}</p>
            <p><strong>Paie:</strong> ${agent.paie} €</p>
        `;
    } else {
        document.getElementById('agentDetails').innerHTML = '<p>Agent non trouvé.</p>';
    }
}

// Appel de la fonction pour afficher les détails de l'agent au chargement de la page
document.addEventListener('DOMContentLoaded', afficherDetailsAgent);
