import fetch from '../../node_modules/isomorphic-unfetch';

export default async function(...args) {
  const res = await fetch(...args);
  return await res.json();
}
