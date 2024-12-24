// Sample agent data
const agents = [
    {
        name: "Agent Alpha",
        marketCap: "$500M",
        growth: "+15%"
    },
    {
        name: "Agent Beta",
        marketCap: "$200M",
        growth: "+8%"
    },
    {
        name: "Agent Gamma",
        marketCap: "$300M",
        growth: "+12%"
    }
];

// Reference to the container where agent cards will be added
const agentsList = document.querySelector(".agents-list");

// Function to generate agent cards
function renderAgents() {
    agentsList.innerHTML = ""; // Clear existing content
    agents.forEach(agent => {
        const card = document.createElement("div");
        card.className = "agent-card";

        card.innerHTML = `
            <h3>${agent.name}</h3>
            <p>Market Cap: ${agent.marketCap}</p>
            <p>Growth: ${agent.growth}</p>
        `;

        agentsList.appendChild(card);
    });
}

// Call the function to render agents
renderAgents();
