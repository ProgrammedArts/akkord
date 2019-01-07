import {
  addMajorSecond,
  substractMajorSecond,
  addMajorThird,
  substractMajorThird,
  addPerfectFourth,
  substractPerfectFourth,
  addPerfectFifth,
  substractPerfectFifth,
  addMajorSixth,
  substractMajorSixth,
  addMajorSeventh,
  substractMajorSeventh,
  addPerfectEighth,
  substractPerfectEighth,
  addPerfectOctave,
  substractPerfectOctave,
} from '../specialIntervals';
import getPitch from '../getPitch';
import Note from '../Note';

describe('Special Intervals', () => {
  const middleC: Pitch = getPitch({ note: Note.C, octave: 4 });
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

    it('should have perfect octave aliases', () => {
      expect(addPerfectEighth).toBe(addPerfectOctave);
      expect(substractPerfectEighth).toBe(substractPerfectOctave);
    });
  });
});
