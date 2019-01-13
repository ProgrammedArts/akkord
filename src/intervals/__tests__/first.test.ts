import Note from '../../Note';
import getPitch from '../../getPitch';
import {
  addPerfectFirst,
  substractPerfectFirst,
  isPerfectFirst,
  addAugmentedFirst,
  substractAugmentedFirst,
  isAugmentedFirst,
} from '../first';

describe('First intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Perfect', () => {
    it('should add a perfect first', () => {
      const result: Pitch = addPerfectFirst(middleC);
      expect(result.note).toBe(middleC.note);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a perfect first', () => {
      const result: Pitch = substractPerfectFirst(middleC);
      expect(result.note).toBe(middleC.note);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should return true if the interval is a perfect first', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 4 });
      expect(isPerfectFirst(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a perfect first', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 4 });
      expect(isPerfectFirst(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented', () => {
    it('should add an augmented first', () => {
      const result: Pitch = addAugmentedFirst(middleC);
      expect(result.note).toBe(Note.CSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract an augmented first', () => {
      const result: Pitch = substractAugmentedFirst(middleC);
      expect(result.note).toBe(Note.B);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is an augmented first', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 4 });
      expect(isAugmentedFirst(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not an augmented first', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.D, octave: 4 });
      expect(isAugmentedFirst(middleC, comparedPitch)).toBe(false);
    });
  });
});
