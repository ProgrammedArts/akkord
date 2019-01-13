import getPitch from '../../getPitch';
import Note from '../../Note';
import {
  substractPerfectEighth,
  isPerfectEighth,
  addPerfectEighth,
  addDiminishedEighth,
  substractDiminishedEighth,
  isDiminishedEighth,
  addAugmentedEighth,
  substractAugmentedEighth,
  isAugmentedEighth,
} from '../eighth';

describe('Eighth intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });

  describe('Diminished eighths', () => {
    it('should add a diminished eighth', () => {
      const result: Pitch = addDiminishedEighth(middleC);
      expect(result.note).toBe(Note.B);
      expect(result.octave).toBe(middleC.octave);
    });

    it('should substract a diminished eighth', () => {
      const result: Pitch = substractDiminishedEighth(middleC);
      expect(result.note).toBe(Note.CSharp);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a diminished eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.B, octave: 4 });
      expect(isDiminishedEighth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a diminished eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 5 });
      expect(isDiminishedEighth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Perfect eighths', () => {
    it('should add a perfect eighth', () => {
      const result: Pitch = addPerfectEighth(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave + 1);
    });

    it('should substract a perfect eighth', () => {
      const result: Pitch = substractPerfectEighth(middleC);
      expect(result.note).toBe(Note.C);
      expect(result.octave).toBe(middleC.octave - 1);
    });

    it('should return true if the interval is a perfect eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.C, octave: 5 });
      expect(isPerfectEighth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not a perfect eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 5 });
      expect(isPerfectEighth(middleC, comparedPitch)).toBe(false);
    });
  });

  describe('Augmented eighths', () => {
    it('should add an augmented eighth', () => {
      const result: Pitch = addAugmentedEighth(middleC);
      expect(result.note).toBe(Note.CSharp);
      expect(result.octave).toBe(middleC.octave + 1);
    });

    it('should substract an augmented eighth', () => {
      const result: Pitch = substractAugmentedEighth(middleC);
      expect(result.note).toBe(Note.B);
      expect(result.octave).toBe(middleC.octave - 2);
    });

    it('should return true if the interval is an augmented eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.CSharp, octave: 5 });
      expect(isAugmentedEighth(middleC, comparedPitch)).toBe(true);
    });

    it('should return false if the interval is not an augmented eighth', () => {
      const comparedPitch: Pitch = getPitch({ note: Note.D, octave: 5 });
      expect(isAugmentedEighth(middleC, comparedPitch)).toBe(false);
    });
  });
});
