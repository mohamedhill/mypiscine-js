
export function getArchitects  ()  {
  const architects = Array.from(document.getElementsByTagName("a"));
  const nonArchitects = Array.from(document.getElementsByTagName("span"))

  return [architects, nonArchitects];
};
export function getClassical  ()  {
  const [architects] = getArchitects();

  const classical = architects.filter(a => a.classList.contains("classical"));
  const nonClassical = architects.filter(a => !a.classList.contains("classical"));

  return [classical, nonClassical];
};
export const getActive = () => {
  const [classical] = getClassical();
  

  const active = classical.filter(a => a.classList.contains("active"));
  const nonActive = classical.filter(a => !a.classList.contains("active"));

  return [active, nonActive];
};
export const getBonannoPisano = () => {
  const [active] = getActive();

  const bonanno = active.find(a => a.id === "BonannoPisano");
  const others = active.filter(a => a.id !== "BonannoPisano");

  return [bonanno, others];
};