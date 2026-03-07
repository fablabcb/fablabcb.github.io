export default async function() {
  const res = await fetch(
    "https://community.fablab-cottbus.de/t/website-ankuendigung/778.json"
  );
  const data = await res.json();
  console.log(data)
  return data
}