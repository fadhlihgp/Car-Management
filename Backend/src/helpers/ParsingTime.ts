export const parsingTime = (value: Date): Date => {
    let timeValue = new Date(value); // Buat salinan baru dari 'value'
    timeValue.setHours(timeValue.getHours() + 7);
    return timeValue;
  };
  