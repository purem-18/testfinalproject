const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const bookingByDate = [];

export const store = () => {
  if (
    !window.localStorage.getItem("availableTimes") ||
    !window.localStorage.getItem("bookingByDate")
  ) {
    window.localStorage.setItem(
      "availableTimes",
      JSON.stringify(availableTimes)
    );
    window.localStorage.setItem("bookingByDate", JSON.stringify(bookingByDate));
  }
};

export const fetchAPI = async (date) => {
  const bookingData = JSON.parse(localStorage.getItem("bookingByDate")) || [];
  const booked = bookingData.filter((b) => b.date === date);
  if (booked.length !== 0) {
    return availableTimes.filter((time) => !booked[0].booked.includes(time));
  }
  return availableTimes;
};

export const submitAPI = async (formData) => {
  const date = formData.date;
  const time = formData.time;
  const bookingData = JSON.parse(localStorage.getItem("bookingByDate")) || [];

  const isBooked =
    bookingData.filter((d) => d.booked.includes(time) && d.date === date)
      .length !== 0;

  const isDateExist = bookingData.filter((d) => d.date === date).length !== 0;

  if (isBooked) {
    return false;
  }

  if (isDateExist) {
    const newBooking = bookingData.filter((d) => d.date === date);
    localStorage.setItem(
      "bookingByDate",
      JSON.stringify([
        ...bookingData.filter((d) => d.date !== date),
        { ...newBooking[0], booked: [...newBooking[0].booked, time] },
      ])
    );
    return true;
  }

  localStorage.setItem(
    "bookingByDate",
    JSON.stringify([...bookingData, { date: date, booked: [time] }])
  );

  return true;
};
