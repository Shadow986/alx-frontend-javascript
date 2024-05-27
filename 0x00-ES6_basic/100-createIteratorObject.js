export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees).flat();
  return allEmployeesSymbol.iterator;
}
