const createDateRange = (start, end) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dates = [];

  let current = new Date(startDate);

  while (current <= endDate) {
    dates.push(current.toISOString().split("T")[0]); 
    current.setDate(current.getDate() + 1);
  }

  return dates;
}


export default createDateRange