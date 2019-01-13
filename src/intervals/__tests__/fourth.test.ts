import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  substractPerfectFourth,
  isPerfectFourth,
  addPerfectFourth,
  addDiminishedFourth,
  substractDiminishedFourth,
  isDiminishedFourth,
  addAugmentedFourth,
  substractAugmentedFourth,
  isAugmentedFourth,
} from '../fourth';

describe('Fourth intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished fourths', () => {
    it('should add a diminished fourth', () => {
      const result: Pitch = addDiminishedFourth(middleC);
      expect(result.note).toBe(Note.E);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished fourth', () => {
      const result: Pitch = substractDiminishedFourth(middleC);
      expect(result.note).toBe(Note.GSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.E, octave: 4 });
      expect(isDiminishedFourth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.F, octave: 4 });
      expect(isDiminishedFourth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Perfect fourths', () => {
    it('should add a perfect fourth', () => {
      const result: Pitch = addPerfectFourth(middleC);
      expect(result.note).toBe(Note.F);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a perfect fourth', () => {
      const result: Pitch = substractPerfectFourth(middleC);
      expect(result.note).toBe(Note.G);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a perfect fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.F, octave: 4 });
      expect(isPerfectFourth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a perfect fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.FSharp, octave: 4 });
      expect(isPerfectFourth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented fourths', () => {
    it('should add an augmented fourth', () => {
      const result: Pitch = addAugmentedFourth(middleC);
      expect(result.note).toBe(Note.FSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract an augmented fourth', () => {
      const result: Pitch = substractAugmentedFourth(middleC);
      expect(result.note).toBe(Note.FSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is an augmented fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.FSharp, octave: 4 });
      expect(isAugmentedFourth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not an augmented fourth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.G, octave: 4 });
      expect(isAugmentedFourth(middleC, comparedPitch)).toBe(false);
    });
  });
});
