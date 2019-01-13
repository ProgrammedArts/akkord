import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  addMajorSeventh,
  substractMajorSeventh,
  isMajorSeventh,
  addDiminishedSeventh,
  substractDiminishedSeventh,
  isDiminishedSeventh,
  addMinorSeventh,
  substractMinorSeventh,
  isMinorSeventh,
  addAugmentedSeventh,
  substractAugmentedSeventh,
  isAugmentedSeventh,
} from '../seventh';

describe('Seventh intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished sevenths', () => {
    it('should add a diminished seventh', () => {
      const result: Pitch = addDiminishedSeventh(middleC);
      expect(result.note).toBe(Note.A);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished seventh', () => {
      const result: Pitch = substractDiminishedSeventh(middleC);
      expect(result.note).toBe(Note.DSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.A, octave: 4 });
      expect(isDiminishedSeventh(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.ASharp, octave: 4 });
      expect(isDiminishedSeventh(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Minor sevenths', () => {
    it('should add a minor seventh', () => {
      const result: Pitch = addMinorSeventh(middleC);
      expect(result.note).toBe(Note.ASharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a minor seventh', () => {
      const result: Pitch = substractMinorSeventh(middleC);
      expect(result.note).toBe(Note.D);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a minor seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.ASharp, octave: 4 });
      expect(isMinorSeventh(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a minor seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.B, octave: 4 });
      expect(isMinorSeventh(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Major sevenths', () => {
    it('should add a major seventh', () => {
      const result: Pitch = addMajorSeventh(middleC);
      expect(result.note).toBe(Note.B);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a major seventh', () => {
      const result: Pitch = substractMajorSeventh(middleC);
      expect(result.note).toBe(Note.CSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a major seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.B, octave: 4 });
      expect(isMajorSeventh(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a major seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 5 });
      expect(isMajorSeventh(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented sevenths', () => {
    it('should add a augmented seventh', () => {
      const result: Pitch = addAugmentedSeventh(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave + 1);
    });

    it('should substract a augmented seventh', () => {
      const result: Pitch = substractAugmentedSeventh(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a augmented seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 5 });
      expect(isAugmentedSeventh(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a augmented seventh', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 5 });
      expect(isAugmentedSeventh(middleC, comparedPitch)).toBe(false);
    });
  });
});
