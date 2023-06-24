const buscarValor = require('./TEST-BUSCAR-VALOR');
test('buscar en el arreglo', () => {
  const array = Array.from({ length: 100 }, () => Math.floor(Math.random() * 10));
  const target = 9;
  const expectedCount = buscarValor(array, valor);
  expect(expectedCount).toBeGreaterThanOrEqual(0);
  expect(Number.isInteger(expectedCount)).toBe(true);
});