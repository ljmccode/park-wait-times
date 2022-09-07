export const getFloridaTime = () => {
  const currentDate = new Date();
  const floridaTime = currentDate.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
  });
  let [hour, amPm] = floridaTime.split(' ');
  hour = Number(hour);
  return { hour, amPm };
};

export const convertMilitary = (time) => {
  const [currentTime, amPm] = time.split(' ');
  const hour = Number(currentTime.split(':')[0]);
  if (amPm === 'PM' && hour !== 12) {
    return `${hour + 12}:00`;
  }
  if (time === '12:00 AM') {
    return '00:00';
  }
  if (hour < 10) {
    return `0${hour}:00`;
  }
  return `${hour}:00`;
};

export const convertRegularTime = (time) => {
  let hours = Number(time.split(':')[0]);
  if (hours > 12) {
    hours = hours - 12;
    return `${hours}:00 PM`;
  }
  if (hours === 12) {
    return `${hours}:00 PM`;
  }
  return `${hours}:00 AM`;
};
