export default async function() {
  const res = await fetch(
    "https://community.fablab-cottbus.de/t/oeffnungszeiten-und-aktuelle-hinweise-fablab-cottbus/306.json"
  );
  const data = await res.json();
  return data
}