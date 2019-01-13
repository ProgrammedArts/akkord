import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  addMajorSecond,
  substractMajorSecond,
  isMajorSecond,
  addDiminishedSecond,
  substractDiminishedSecond,
  isDiminishedSecond,
  addMinorSecond,
  substractMinorSecond,
  isMinorSecond,
  addAugmentedSecond,
  substractAugmentedSecond,
  isAugmentedSecond,
} from '../second';

describe('Second intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished seconds', () => {
    it('should add a diminished second', () => {
      const result: Pitch = addDiminishedSecond(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished second', () => {
      const result: Pitch = substractDiminishedSecond(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should return true if the interval is a diminished second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 4 });
      expect(isDiminishedSecond(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 4 });
      expect(isDiminishedSecond(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Minor seconds', () => {
    it('should add a minor second', () => {
      const result: Pitch = addMinorSecond(middleC);
      expect(result.note).toBe(Note.CSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a minor second', () => {
      const result: Pitch = substractMinorSecond(middleC);
      expect(result.note).toBe(Note.B);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a minor second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 4 });
      expect(isMinorSecond(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a minor second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.D, octave: 4 });
      expect(isMinorSecond(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Major seconds', () => {
    it('should add a major second', () => {
      const result: Pitch = addMajorSecond(middleC);
      expect(result.note).toBe(Note.D);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a major second', () => {
      const result: Pitch = substractMajorSecond(middleC);
      expect(result.note).toBe(Note.ASharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a major second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.D, octave: 4 });
      expect(isMajorSecond(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a major second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.DSharp, octave: 4 });
      expect(isMajorSecond(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented seconds', () => {
    it('should add a augmented second', () => {
      const result: Pitch = addAugmentedSecond(middleC);
      expect(result.note).toBe(Note.DSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a augmented second', () => {
      const result: Pitch = substractAugmentedSecond(middleC);
      expect(result.note).toBe(Note.A);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a augmented second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.DSharp, octave: 4 });
      expect(isAugmentedSecond(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a augmented second', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.E, octave: 4 });
      expect(isAugmentedSecond(middleC, comparedPitch)).toBe(false);
    });
  });
});
