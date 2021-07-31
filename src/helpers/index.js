// Strings

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

export const trucanteString = (str, maxChar) => {
  if (str.length > maxChar) {
    return str.substring(0, maxChar) + "...";
  }
  return str;
};

// Files

export function dataURLtoFile(dataurl, filename) {
  let arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}
