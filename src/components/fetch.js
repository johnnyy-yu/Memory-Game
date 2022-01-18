export default async function fetchDisney() {
  while (true) {
    let count = 0;
    const maxTries = 2;

    try {
      const character = Math.floor(Math.random() * 7438); // Api has a total of 7438 characters
      const url = `https://api.disneyapi.dev/characters/${character}`;

      const response = await fetch(url);
      const disneyChar = await response.json();

      return disneyChar;
    } catch (error) {
      if (++count === maxTries) throw error;
    }
  }
}
