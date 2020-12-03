export function filterPlayers(str) {
  const regex = /[a-zÀ-ÿ\s]+/gi;

  const players = new Array();
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
  console.log([...duplicatesRemoved]);
  return [...duplicatesRemoved];
}

export function randomizePlayers(players) {
  return players;
}
