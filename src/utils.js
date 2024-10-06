export function getYearDifference(startDate) {
  const start = new Date(startDate);
  const end = new Date();

  let yearsDiff = end.getFullYear() - start.getFullYear();

  // Adjust for whether the end date has occurred yet this year
  const hasPassedThisYear =
    end.getMonth() < start.getMonth() ||
    (end.getMonth() === start.getMonth() && end.getDate() < start.getDate());

  if (hasPassedThisYear) {
    yearsDiff--;
  }

  return yearsDiff;
}