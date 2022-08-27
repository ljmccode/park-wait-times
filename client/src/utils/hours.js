export const militaryHours = [
  '07:00',
  '08:00',
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00',
  '24:00',
];

export const openHours = [
  '07:00 AM',
  '08:00 AM',
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '01:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
  '07:00 PM',
  '08:00 PM',
  '09:00 PM',
  '10:00 PM',
  '11:00 PM',
  '12:00 AM',
];

export const getFloridaTime = () => {
  const currentDate = new Date();
  const floridaTime = currentDate.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
  });

  const [hour, amPm] = floridaTime.split(' ');
  return { time: `${hour}:00 ${amPm}` };
};

export const convertMilitary = (time) => {
  const [currentTime, amPm] = time.split(' ');
  const hour = Number(currentTime.slice(0, 2));
  if (amPm === 'PM') {
    return `${hour + 12}:00`;
  }
  return `${hour}:00`;
};

export const convertRegularTime = (time) => {
  let hours = Number(time.split(':')[0]);
  if (hours > 12) {
    hours = hours - 12;
    return `${hours}:00 PM`;
  }
  return `${hours}:00 AM`;
};
