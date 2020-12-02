export function filterPlayers(str) {
  const regex = /[a-zÀ-ÿ\s]+/gi;

  const players = new Array();
  let m;

  while ((m = regex.exec(str)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    m.forEach((match) => {
      players.push(match.toLowerCase());
    });
  }

  const duplicatesRemoved = new Set(players);
  return [...duplicatesRemoved];
}
