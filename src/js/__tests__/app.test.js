import { Bowman } from '../app';

test('bowman lvl after lvl up', () => {
  const bowman1 = new Bowman('bow', 'Bowman');
  bowman1.levelUp();
  const result = bowman1.level;

  expect(result).toBe(2);
});

test('bowman health after damage', () => {
  const bowman1 = new Bowman('bow', 'Bowman');
  bowman1.damage(31);
  const result = bowman1.health;

  expect(result).toBe(76.75);
});

test('bowman health after damage and lvl up', () => {
  const bowman1 = new Bowman('bow', 'Bowman');
  bowman1.damage(31);
  bowman1.levelUp();
  const result = bowman1.health;

  expect(result).toBe(100);
});