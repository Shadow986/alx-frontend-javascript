export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  for (let employee of reportWithIterator) {
    employees += `${employee} | `;
  }
  return employees.slice(0, -3); // remove the last ' | '
}
