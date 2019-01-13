import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  substractPerfectFifth,
  isPerfectFifth,
  addPerfectFifth,
  addDiminishedFifth,
  substractDiminishedFifth,
  isDiminishedFifth,
  addAugmentedFifth,
  substractAugmentedFifth,
  isAugmentedFifth,
} from '../fifth';

describe('Fifth intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished fifths', () => {
    it('should add a diminished fifth', () => {
      const result: Pitch = addDiminishedFifth(middleC);
      expect(result.note).toBe(Note.FSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished fifth', () => {
      const result: Pitch = substractDiminishedFifth(middleC);
      expect(result.note).toBe(Note.FSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.FSharp, octave: 4 });
      expect(isDiminishedFifth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.G, octave: 4 });
      expect(isDiminishedFifth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Perfect fifths', () => {
    it('should add a perfect fifth', () => {
      const result: Pitch = addPerfectFifth(middleC);
      expect(result.note).toBe(Note.G);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a perfect fifth', () => {
      const result: Pitch = substractPerfectFifth(middleC);
      expect(result.note).toBe(Note.F);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a perfect fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.G, octave: 4 });
      expect(isPerfectFifth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a perfect fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.GSharp, octave: 4 });
      expect(isPerfectFifth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented fifths', () => {
    it('should add an augmented fifth', () => {
      const result: Pitch = addAugmentedFifth(middleC);
      expect(result.note).toBe(Note.GSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract an augmented fifth', () => {
      const result: Pitch = substractAugmentedFifth(middleC);
      expect(result.note).toBe(Note.E);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is an augmented fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.GSharp, octave: 4 });
      expect(isAugmentedFifth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not an augmented fifth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.A, octave: 4 });
      expect(isAugmentedFifth(middleC, comparedPitch)).toBe(false);
    });
  });
});
