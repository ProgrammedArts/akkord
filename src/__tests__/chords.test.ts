import {
  createChordAugmentedMajorSeventh,
  createChordAugmentedSeventh,
  createChordAugmentedTriad,
  createChordDiminishedSeventh,
  createChordDiminishedTriad,
  createChordDominantSeventh,
  createChordHalfDiminishedSeventh,
  createChordMajorSeventh,
  createChordMajorTriad,
  createChordMinorMajorSeventh,
  createChordMinorSeventh,
  createChordMinorTriad,
  invertChord,
  isChordAugmentedMajorSeventh,
  isChordAugmentedSeventh,
  isChordAugmentedTriad,
  isChordDiminishedSeventh,
  isChordDiminishedTriad,
  isChordDominantSeventh,
  isChordHalfDiminishedSeventh,
  isChordMajorSeventh,
  isChordMajorTriad,
  isChordMinorMajorSeventh,
  isChordMinorSeventh,
  isChordMinorTriad,
} from '../chords';
import getPitch from '../getPitch';
import Note from '../Note';

describe('Chords', () => {
  describe('Chord inversion', () => {
    it('should return the first inversion of a triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = invertChord(createChordMajorTriad(rootPitch));
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(Note.E);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.G);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.C);
      expect(p2.octave).toBe(rootPitch.octave + 1);
    });

    it('should return the second inversion of a triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = invertChord(
        invertChord(createChordMajorTriad(rootPitch))
      );
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(Note.G);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.C);
      expect(p1.octave).toBe(rootPitch.octave + 1);
      expect(p2.note).toBe(Note.E);
      expect(p2.octave).toBe(rootPitch.octave + 1);
    });

    it('should return the first inversion of a seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = invertChord(createChordMajorSeventh(rootPitch));
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(Note.E);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.G);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.B);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.C);
      expect(p3.octave).toBe(rootPitch.octave + 1);
    });

    it('should return the second inversion of a seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = invertChord(
        invertChord(createChordMajorSeventh(rootPitch))
      );
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(Note.G);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.B);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.C);
      expect(p2.octave).toBe(rootPitch.octave + 1);
      expect(p3.note).toBe(Note.E);
      expect(p3.octave).toBe(rootPitch.octave + 1);
    });

    it('should return the third inversion of a seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = invertChord(
        invertChord(invertChord(createChordMajorSeventh(rootPitch)))
      );
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(Note.B);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.C);
      expect(p1.octave).toBe(rootPitch.octave + 1);
      expect(p2.note).toBe(Note.E);
      expect(p2.octave).toBe(rootPitch.octave + 1);
      expect(p3.note).toBe(Note.G);
      expect(p3.octave).toBe(rootPitch.octave + 1);
    });
  });

  describe('Major triads', () => {
    it('should create a major triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordMajorTriad(rootPitch);
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a major triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });

      expect(isChordMajorTriad([p0, p1, p2])).toBe(true);
    });

    it('should return false if the chord is not a major triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });

      expect(isChordMajorTriad([p0, p1, p2])).toBe(false);
      expect(isChordMajorTriad([p0, p2])).toBe(false);
    });
  });

  describe('Minor triads', () => {
    it('should create a minor triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordMinorTriad(rootPitch);
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a minor triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });

      expect(isChordMinorTriad([p0, p1, p2])).toBe(true);
    });

    it('should return false if the chord is not a minor triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });

      expect(isChordMinorTriad([p0, p1, p2])).toBe(false);
      expect(isChordMinorTriad([p0, p2])).toBe(false);
    });
  });

  describe('Augmented triads', () => {
    it('should create an augmented triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordAugmentedTriad(rootPitch);
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.GSharp);
      expect(p2.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is an augmented triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.GSharp });

      expect(isChordAugmentedTriad([p0, p1, p2])).toBe(true);
    });

    it('should return false if the chord is not an augmented triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });

      expect(isChordAugmentedTriad([p0, p1, p2])).toBe(false);
      expect(isChordAugmentedTriad([p0, p2])).toBe(false);
    });
  });

  describe('Diminished triads', () => {
    it('should create a diminished triad', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordDiminishedTriad(rootPitch);
      const [p0, p1, p2]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.FSharp);
      expect(p2.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a diminished triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.FSharp });

      expect(isChordDiminishedTriad([p0, p1, p2])).toBe(true);
    });

    it('should return false if the chord is not a diminished triad', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });

      expect(isChordDiminishedTriad([p0, p1, p2])).toBe(false);
      expect(isChordDiminishedTriad([p0, p2])).toBe(false);
    });
  });

  describe('Dominant sevenths', () => {
    it('should create a dominant seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordDominantSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.ASharp);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a dominant seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordDominantSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a dominant seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordDominantSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordDominantSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Major sevenths', () => {
    it('should create a major seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordMajorSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.B);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordMajorSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordMajorSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordMajorSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Minor sevenths', () => {
    it('should create a minor seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordMinorSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.ASharp);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a minor seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordMinorSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a minor seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordMinorSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordMinorSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Half diminished sevenths', () => {
    it('should create a half diminished seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordHalfDiminishedSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.FSharp);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.ASharp);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a half diminished seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.FSharp });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordHalfDiminishedSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a half diminished seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordHalfDiminishedSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordHalfDiminishedSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Diminished sevenths', () => {
    it('should create a diminished seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordDiminishedSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.FSharp);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.A);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a diminished seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.FSharp });
      const p3: Pitch = getPitch({ octave: 4, note: Note.A });

      expect(isChordDiminishedSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a diminished seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.A });

      expect(isChordDiminishedSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordDiminishedSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Minor major sevenths', () => {
    it('should create a minor major seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordMinorMajorSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.DSharp);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.G);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.B);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is a minor major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.DSharp });
      const p2: Pitch = getPitch({ octave: 4, note: Note.G });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordMinorMajorSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not a minor major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordMinorMajorSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordMinorMajorSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Augmented major sevenths', () => {
    it('should create an augmented major seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordAugmentedMajorSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.GSharp);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.B);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is an augmented major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.GSharp });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordAugmentedMajorSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not an augmented major seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.B });

      expect(isChordAugmentedMajorSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordAugmentedMajorSeventh([p0, p2, p3])).toBe(false);
    });
  });

  describe('Augmented sevenths', () => {
    it('should create an augmented seventh', () => {
      const rootPitch: Pitch = getPitch({ octave: 4, note: Note.C });
      const result: Pitch[] = createChordAugmentedSeventh(rootPitch);
      const [p0, p1, p2, p3]: Pitch[] = result;
      expect(p0.note).toBe(rootPitch.note);
      expect(p0.octave).toBe(rootPitch.octave);
      expect(p1.note).toBe(Note.E);
      expect(p1.octave).toBe(rootPitch.octave);
      expect(p2.note).toBe(Note.GSharp);
      expect(p2.octave).toBe(rootPitch.octave);
      expect(p3.note).toBe(Note.ASharp);
      expect(p3.octave).toBe(rootPitch.octave);
    });

    it('should return true if the chord is an augmented seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.E });
      const p2: Pitch = getPitch({ octave: 4, note: Note.GSharp });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordAugmentedSeventh([p0, p1, p2, p3])).toBe(true);
    });

    it('should return false if the chord is not an augmented seventh', () => {
      const p0: Pitch = getPitch({ octave: 4, note: Note.C });
      const p1: Pitch = getPitch({ octave: 4, note: Note.D });
      const p2: Pitch = getPitch({ octave: 4, note: Note.E });
      const p3: Pitch = getPitch({ octave: 4, note: Note.ASharp });

      expect(isChordAugmentedSeventh([p0, p1, p2, p3])).toBe(false);
      expect(isChordAugmentedSeventh([p0, p2, p3])).toBe(false);
    });
  });
});
