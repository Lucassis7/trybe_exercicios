const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(genericArray) {
  return genericArray.reduce((acc, curr) => acc + curr.split('').reduce((acumulator, current) => {
    if (current.includes('a') || current.includes('A')) return acumulator + 1;
    return acumulator;
  }, 0), 0);
};

console.log(containsA(names));
