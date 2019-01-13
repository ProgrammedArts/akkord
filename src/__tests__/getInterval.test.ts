import getInterval from '../getInterval';
import getPitch from '../getPitch';
import Note from '../Note';

describe('getInterval', () => {
  it('should get the proper interval between 2 notes within the same octave', () => {
    const pA = getPitch({ note: Note.C, octave: 4 });
    const pB = getPitch({ note: Note.G, octave: 4 });
    expect(getInterval(pA, pB)).toBe(7);
    expect(getInterval(pB, pA)).toBe(7);
  });

  it('should get the proper interval between 2 notes in different octaves', () => {
    const pA = getPitch({ note: Note.C, octave: 4 });
    const pB = getPitch({ note: Note.G, octave: 5 });
    expect(getInterval(pA, pB)).toBe(19);
    expect(getInterval(pB, pA)).toBe(19);
  });
});
