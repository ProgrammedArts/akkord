import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  addMajorThird,
  substractMajorThird,
  isMajorThird,
  addDiminishedThird,
  substractDiminishedThird,
  isDiminishedThird,
  addMinorThird,
  substractMinorThird,
  isMinorThird,
  addAugmentedThird,
  substractAugmentedThird,
  isAugmentedThird,
} from '../third';

describe('Third intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished thirds', () => {
    it('should add a diminished third', () => {
      const result: Pitch = addDiminishedThird(middleC);
      expect(result.note).toBe(Note.D);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished third', () => {
      const result: Pitch = substractDiminishedThird(middleC);
      expect(result.note).toBe(Note.ASharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.D, octave: 4 });
      expect(isDiminishedThird(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.DSharp, octave: 4 });
      expect(isDiminishedThird(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Minor thirds', () => {
    it('should add a minor third', () => {
      const result: Pitch = addMinorThird(middleC);
      expect(result.note).toBe(Note.DSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a minor third', () => {
      const result: Pitch = substractMinorThird(middleC);
      expect(result.note).toBe(Note.A);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a minor third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.DSharp, octave: 4 });
      expect(isMinorThird(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a minor third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.E, octave: 4 });
      expect(isMinorThird(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Major thirds', () => {
    it('should add a major third', () => {
      const result: Pitch = addMajorThird(middleC);
      expect(result.note).toBe(Note.E);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a major third', () => {
      const result: Pitch = substractMajorThird(middleC);
      expect(result.note).toBe(Note.GSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a major third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.E, octave: 4 });
      expect(isMajorThird(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a major third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.F, octave: 4 });
      expect(isMajorThird(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented thirds', () => {
    it('should add a augmented third', () => {
      const result: Pitch = addAugmentedThird(middleC);
      expect(result.note).toBe(Note.F);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a augmented third', () => {
      const result: Pitch = substractAugmentedThird(middleC);
      expect(result.note).toBe(Note.G);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a augmented third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.F, octave: 4 });
      expect(isAugmentedThird(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a augmented third', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.FSharp, octave: 4 });
      expect(isAugmentedThird(middleC, comparedPitch)).toBe(false);
    });
  });
});
