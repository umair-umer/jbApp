export const calculateDaysAgo = (created_at) => {
    const posted_date = new Date(created_at);
    const current_date = new Date();
    const difference_in_time = current_date - posted_date;
    const difference_in_days = Math.floor(difference_in_time / (1000 * 3600 * 24));
    return difference_in_days;
  };