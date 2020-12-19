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

  const cleanPlayersList = players
    .toString()
    .replace(/\n/g, ",")
    .split(",")
    .filter((item) => item);

  const duplicatesRemoved = new Set(cleanPlayersList);

  return [...duplicatesRemoved];
}

export function randomizePlayers(players) {
  return players.sort(() => Math.random() - 0.5);
}
