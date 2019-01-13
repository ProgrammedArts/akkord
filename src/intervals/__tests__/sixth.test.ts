import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  addMajorSixth,
  substractMajorSixth,
  isMajorSixth,
  addDiminishedSixth,
  substractDiminishedSixth,
  isDiminishedSixth,
  addMinorSixth,
  substractMinorSixth,
  isMinorSixth,
  addAugmentedSixth,
  substractAugmentedSixth,
  isAugmentedSixth,
} from '../sixth';

describe('Sixth intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished sixths', () => {
    it('should add a diminished sixth', () => {
      const result: Pitch = addDiminishedSixth(middleC);
      expect(result.note).toBe(Note.G);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished sixth', () => {
      const result: Pitch = substractDiminishedSixth(middleC);
      expect(result.note).toBe(Note.F);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.G, octave: 4 });
      expect(isDiminishedSixth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.GSharp, octave: 4 });
      expect(isDiminishedSixth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Minor sixths', () => {
    it('should add a minor sixth', () => {
      const result: Pitch = addMinorSixth(middleC);
      expect(result.note).toBe(Note.GSharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a minor sixth', () => {
      const result: Pitch = substractMinorSixth(middleC);
      expect(result.note).toBe(Note.E);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a minor sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.GSharp, octave: 4 });
      expect(isMinorSixth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a minor sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.A, octave: 4 });
      expect(isMinorSixth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Major sixths', () => {
    it('should add a major sixth', () => {
      const result: Pitch = addMajorSixth(middleC);
      expect(result.note).toBe(Note.A);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a major sixth', () => {
      const result: Pitch = substractMajorSixth(middleC);
      expect(result.note).toBe(Note.DSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a major sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.A, octave: 4 });
      expect(isMajorSixth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a major sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.ASharp, octave: 4 });
      expect(isMajorSixth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented sixths', () => {
    it('should add a augmented sixth', () => {
      const result: Pitch = addAugmentedSixth(middleC);
      expect(result.note).toBe(Note.ASharp);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a augmented sixth', () => {
      const result: Pitch = substractAugmentedSixth(middleC);
      expect(result.note).toBe(Note.D);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a augmented sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.ASharp, octave: 4 });
      expect(isAugmentedSixth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a augmented sixth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.B, octave: 4 });
      expect(isAugmentedSixth(middleC, comparedPitch)).toBe(false);
    });
  });
});
