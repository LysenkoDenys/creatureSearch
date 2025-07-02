const listOfCreaturesUrl =
  'https://rpg-creature-api.freecodecamp.rocks/api/creatures';
const dataOfCreaturesUrl =
  'https://rpg-creature-api.freecodecamp.rocks/api/creature/';

const typeColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

document.addEventListener('DOMContentLoaded', () => {
  const inputNode = document.getElementById('search-input');
  const buttonNode = document.getElementById('search-button');
  const creatureNameNode = document.getElementById('creature-name');
  const creatureIdNode = document.getElementById('creature-id');
  const weightNode = document.getElementById('weight');
  const heightNode = document.getElementById('height');
  const typesNode = document.getElementById('types');
  const hpNode = document.getElementById('hp');
  const attackNode = document.getElementById('attack');
  const defenseNode = document.getElementById('defense');
  const specialAttackNode = document.getElementById('special-attack');
  const specialDefenseNode = document.getElementById('special-defense');
  const speedNode = document.getElementById('speed');
  const specialNameNode = document.getElementById('special-name');
  const specialDescriptionNode = document.getElementById('special-description');

  let cachedCreatures = null;

  const getNamesIdFromApi = async () => {
    if (cachedCreatures) {
      return cachedCreatures;
    }
    try {
      const res = await fetch(listOfCreaturesUrl);
      const creatureNames = await res.json();
      cachedCreatures = creatureNames; // store in cache
      return creatureNames;
    } catch (err) {
      console.error(err);
    }
  };
  getNamesIdFromApi();

  const getDataIdFromApi = async (identifier) => {
    try {
      const res = await fetch(dataOfCreaturesUrl + identifier);
      const creatureData = await res.json();
      console.log(creatureData);
      return creatureData;
    } catch (err) {
      console.error(err);
    }
  };

  const getCreatureInfo = async () => {
    const input = inputNode.value.trim().toLowerCase();
    if (!input) return;

    buttonNode.disabled = true;
    buttonNode.textContent = 'Loading...';

    if (input.includes('red')) {
      alert('Creature not found');
      return;
    }

    try {
      const creatures = await getNamesIdFromApi();
      const match = creatures.find(
        (creature) =>
          creature.id.toString() === input ||
          creature.name.toLowerCase() === input
      );
      if (match) {
        const creatureData = await getDataIdFromApi(match.id);
        creatureNameNode.textContent = creatureData.name;
        creatureIdNode.textContent = `#${creatureData.id}`;
        weightNode.textContent = `Weight: ${creatureData.weight}`;
        heightNode.textContent = `Height: ${creatureData.height}`;
        typesNode.innerHTML = ''; // Clear previous entries

        creatureData.types.forEach((el) => {
          const li = document.createElement('li');
          li.textContent = el.name;
          li.style.backgroundColor =
            typeColors[el.name.toLowerCase()] || 'gray'; // fallback
          li.style.color = 'white';
          li.style.padding = '0.5rem 1rem';
          li.style.margin = '0.25rem';
          li.style.borderRadius = '0.5rem';
          li.style.display = 'inline-block';
          li.style.fontWeight = '600';
          typesNode.appendChild(li);
        });
        specialNameNode.textContent = creatureData.special.name;
        specialDescriptionNode.textContent = creatureData.special.description;
        hpNode.textContent = creatureData.stats.find(
          (el) => el.name === 'hp'
        ).base_stat;
        attackNode.textContent = creatureData.stats.find(
          (el) => el.name === 'attack'
        ).base_stat;
        defenseNode.textContent = creatureData.stats.find(
          (el) => el.name === 'defense'
        ).base_stat;
        specialAttackNode.textContent = creatureData.stats.find(
          (el) => el.name === 'special-attack'
        ).base_stat;
        specialDefenseNode.textContent = creatureData.stats.find(
          (el) => el.name === 'special-defense'
        ).base_stat;
        speedNode.textContent = creatureData.stats.find(
          (el) => el.name === 'speed'
        ).base_stat;
      } else {
        alert('Creature not found');
        return;
      }
    } catch (err) {
      console.error('Error getting creature info:', err);
    } finally {
      buttonNode.disabled = false;
      buttonNode.textContent = 'Search';
    }
  };

  buttonNode.addEventListener('click', getCreatureInfo);
  inputNode.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') getCreatureInfo();
  });
});
