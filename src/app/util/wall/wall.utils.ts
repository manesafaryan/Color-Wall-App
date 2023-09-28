function generateColors(numberOfColors: number): string[] {
  const generatedColors: string[] = [];
  for (let i = 0; i < numberOfColors; i++) {
    const r = Math.random() * 255;
    const g = Math.random() * 255;
    const b = Math.random() * 255;
    generatedColors.push(`rgb(${r}, ${g}, ${b})`);
  }
  return generatedColors;
}

export { generateColors };
