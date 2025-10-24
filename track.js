const message = `👤 Nuovo accesso alla tua PS3 List - ${new Date().toLocaleString()}`;
fetch("https://ntfy.sh/IKKI-private007", {
  method: "POST",
  headers: { "Title": "Accesso PS3 List" },
  body: message
});