const fill = (value: number) => value.toString().padStart(2, '0');

export const getRandomID = (today = new Date()) => `${today.getFullYear().toString()}`+
    `${fill(today.getMonth()+1)}`+
    `${fill(today.getDate())}` +
    `-${Date.now().toString().slice(-3)}`;
