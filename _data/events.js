export default async function() {
  const res = await fetch(
    "https://community.fablab-cottbus.de/discourse-post-event/events.json"
  );
  const data = await res.json();
  const now = Date.now();

  const upcoming = data.events.filter((event) => {
    return new Date(event.starts_at).getTime() > now;
  });

  return upcoming;
}