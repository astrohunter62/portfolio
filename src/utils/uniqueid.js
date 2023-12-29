/*
    File: uniqueid.js
    Version: 1.0
*/

let uniqueId = 0;

export default function getUniqueId(prefix = "id") {
  uniqueId++;
  return `${prefix}${uniqueId}`;
}
