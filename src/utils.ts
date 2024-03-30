export function stringToSlug(str: string) {
  str = str.toLowerCase();
  str = str.replace(/\s+/g, "-"); // Collapse whitespace and replace by -

  return str;
}
