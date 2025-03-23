/**
 *  Authors:  Keegan Hinnigan
 *  Date:     22/03/2025
 *  Version:  1.0
 *  
 *  This file loads all the games from the JSON file to the game containers
 *  on the website and allows for a nice, dynamic way of updating the website.
 *  This is an example for an indie video games developer.
 * 
 */

async function loadGames() 
{    
    try 
    {
        // Load the JSON.
        const response = await fetch('res/json/gamedata.json');
        if (!response.ok) throw new Error('Failed to load JSON');
        const games = await response.json();


        // Setup references and JSON.        
        const container = document.getElementById('card-list');


        // For each game in the JSON, generate a panel.
        games.forEach(game => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game-container', game.position);
            gameDiv.innerHTML = `
                <img src="${game.image}" alt="${game.name}">
                <div class="game-details">
                    <h2>${game.name}</h2>
                    <p>${game.description}</p>
                    <a class="download-btn" href="${game.download}">Download</a>
                </div>                
            `;
            container.appendChild(gameDiv);
        });

    } 
    catch (error) 
    {
        console.error("Error loading games:", error);
    }
}

// Listen for website loaded.
document.addEventListener("DOMContentLoaded", loadGames);