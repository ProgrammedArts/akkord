import Scale from '../Scale';
import Note from '../Note';
import getPitch from '../getPitch';
import { MajorScale } from '../scales/major';

describe('Scale class', () => {
  let majorScale: Scale;

  beforeAll(() => {
    majorScale = new MajorScale(Note.C);
  });

  describe('Notes', () => {
    it('should have a notes property showing all Notes contained in the scale', () => {
      expect(majorScale.notes).toEqual([
        Note.C,
        Note.D,
        Note.E,
        Note.F,
        Note.G,
        Note.A,
        Note.B,
        Note.C,
      ]);
    });
  });

  describe('Within scale', () => {
    it('should return true if note is within scale', () => {
      expect(majorScale.isWithinScale(Note.C)).toBe(true);
    });

    it('should return false if note is not within scale', () => {
      expect(majorScale.isWithinScale(Note.CSharp)).toBe(false);
    });

    it('should return true if note is within scale', () => {
      expect(
        majorScale.isWithinScale(getPitch({ octave: 4, note: Note.C }))
      ).toBe(true);
    });

    it('should return false if note is not within scale', () => {
      expect(
        majorScale.isWithinScale(getPitch({ octave: 4, note: Note.CSharp }))
      ).toBe(false);
    });

    it('should return true if all notes are within scale', () => {
      expect(majorScale.isWithinScale([Note.C, Note.E, Note.G])).toBe(true);
    });

    it('should return false if at least one note is not within scale', () => {
      expect(majorScale.isWithinScale([Note.C, Note.FSharp, Note.G])).toBe(
        false
      );
    });

    it('should return true if all pitches are within scale', () => {
      expect(
        majorScale.isWithinScale([
          getPitch({ octave: 4, note: Note.C }),
          getPitch({ octave: 4, note: Note.E }),
          getPitch({ octave: 4, note: Note.G }),
        ])
      ).toBe(true);
    });

    it('should return false if at least one pitch is not within scale', () => {
      expect(
        majorScale.isWithinScale([
          getPitch({ octave: 4, note: Note.C }),
          getPitch({ octave: 4, note: Note.FSharp }),
          getPitch({ octave: 4, note: Note.G }),
        ])
      ).toBe(false);
    });
  });

  describe('Diatonic chords', () => {
    it('should return all diatonic triads', () => {
      const octave: number = 4;
      expect(majorScale.getDiatonicTriads(octave)).toEqual([
        [
          getPitch({ octave, note: Note.C }),
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
        ],
        [
          getPitch({ octave, note: Note.D }),
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
        ],
        [
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
        ],
        [
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
        ],
        [
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
        ],
        [
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
        ],
        [
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
        ],
        [
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
        ],
      ]);
    });

    it('should return all diatonic sevenths', () => {
      const octave: number = 4;
      expect(majorScale.getDiatonicSevenths(octave)).toEqual([
        [
          getPitch({ octave, note: Note.C }),
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
        ],
        [
          getPitch({ octave, note: Note.D }),
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
        ],
        [
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
        ],
        [
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
        ],
        [
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
        ],
        [
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
        ],
        [
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
          getPitch({ octave: octave + 1, note: Note.A }),
        ],
        [
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
          getPitch({ octave: octave + 1, note: Note.B }),
        ],
      ]);
    });

    it('should return all diatonic chords', () => {
      const octave: number = 4;
      expect(majorScale.getDiatonicChords(octave)).toEqual([
        [
          getPitch({ octave, note: Note.C }),
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
        ],
        [
          getPitch({ octave, note: Note.D }),
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
        ],
        [
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
        ],
        [
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
        ],
        [
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
        ],
        [
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
        ],
        [
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
        ],
        [
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
        ],
        [
          getPitch({ octave, note: Note.C }),
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
        ],
        [
          getPitch({ octave, note: Note.D }),
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
        ],
        [
          getPitch({ octave, note: Note.E }),
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
        ],
        [
          getPitch({ octave, note: Note.F }),
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
        ],
        [
          getPitch({ octave, note: Note.G }),
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
        ],
        [
          getPitch({ octave, note: Note.A }),
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
        ],
        [
          getPitch({ octave, note: Note.B }),
          getPitch({ octave: octave + 1, note: Note.D }),
          getPitch({ octave: octave + 1, note: Note.F }),
          getPitch({ octave: octave + 1, note: Note.A }),
        ],
        [
          getPitch({ octave: octave + 1, note: Note.C }),
          getPitch({ octave: octave + 1, note: Note.E }),
          getPitch({ octave: octave + 1, note: Note.G }),
          getPitch({ octave: octave + 1, note: Note.B }),
        ],
      ]);
    });
  });

  describe('Modes', () => {
    it('should instantiate a new Scale using a mode (index)', () => {
      expect(majorScale.getMode(1).steps).toEqual([2, 1, 2, 2, 2, 1, 2]);
    });
    it('should instantiate a new Scale using a mode (named)', () => {
      expect(majorScale.getMode('aeolian').steps).toEqual([
        2,
        1,
        2,
        2,
        1,
        2,
        2,
      ]);
    });
  });
});
