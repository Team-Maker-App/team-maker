export function filterPlayers(str) {
  const regex = /[a-zÀ-ÿ\s]+/gi;

  const players = [];
  let m;

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match) => {
      const cleanedPlayerName = match.toLowerCase().trim();
      players.push(cleanedPlayerName);
    });
  }

  const duplicatesRemoved = new Set(players);

  return [...duplicatesRemoved].toString();
}

export function randomizePlayers(players) {
  return players;
}
