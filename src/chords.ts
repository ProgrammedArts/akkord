import getPitch from './getPitch';
import {
  addAugmentedFifth,
  addDiminishedFifth,
  addDiminishedSeventh,
  addMajorSeventh,
  addMajorThird,
  addMinorSeventh,
  addMinorThird,
  addPerfectFifth,
  isAugmentedFifth,
  isDiminishedFifth,
  isDiminishedSeventh,
  isMajorSeventh,
  isMajorThird,
  isMinorSeventh,
  isMinorThird,
  isPerfectFifth,
} from './intervals';

/**
 * Inverts a chord
 * In order to invert a chord it moves the bass note to an octave above
 * @param chord an array of Pitch that constitutes the chord
 * @returns {Pitch[]} the inversion of the chord
 */
export const invertChord: (chord: Pitch[]) => Pitch[] = function invertChord(
  chord: Pitch[]
): Pitch[] {
  const [bass, ...rest] = chord;
  return [...rest, getPitch({ octave: bass.octave + 1, note: bass.note })];
};

/**
 * Creates a major triad chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordMajorTriad: (
  rootPitch: Pitch
) => Pitch[] = function createChordMajorTriad(rootPitch: Pitch): Pitch[] {
  return [rootPitch, addMajorThird(rootPitch), addPerfectFifth(rootPitch)];
};

/**
 * Returns true if the input chord is a major triad
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordMajorTriad: (
  chord: Pitch[]
) => void = function isChordMajorTriad(chord: Pitch[]): boolean {
  if (chord.length !== 3) {
    return false;
  }
  const [p0, p1, p2]: Pitch[] = chord;
  return isMajorThird(p0, p1) && isPerfectFifth(p0, p2);
};

/**
 * Creates a minor triad chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordMinorTriad: (
  rootPitch: Pitch
) => Pitch[] = function createChordMinorTriad(rootPitch: Pitch): Pitch[] {
  return [rootPitch, addMinorThird(rootPitch), addPerfectFifth(rootPitch)];
};

/**
 * Returns true if the input chord is a minor triad
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordMinorTriad: (
  chord: Pitch[]
) => void = function isChordMinorTriad(chord: Pitch[]): boolean {
  if (chord.length !== 3) {
    return false;
  }
  const [p0, p1, p2]: Pitch[] = chord;
  return isMinorThird(p0, p1) && isPerfectFifth(p0, p2);
};

/**
 * Creates an augmented triad chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordAugmentedTriad: (
  rootPitch: Pitch
) => Pitch[] = function createChordAugmentedTriad(rootPitch: Pitch): Pitch[] {
  return [rootPitch, addMajorThird(rootPitch), addAugmentedFifth(rootPitch)];
};

/**
 * Returns true if the input chord is an augmented triad
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordAugmentedTriad: (
  chord: Pitch[]
) => void = function isChordAugmentedTriad(chord: Pitch[]): boolean {
  if (chord.length !== 3) {
    return false;
  }
  const [p0, p1, p2]: Pitch[] = chord;
  return isMajorThird(p0, p1) && isAugmentedFifth(p0, p2);
};

/**
 * Creates a diminished triad chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordDiminishedTriad: (
  rootPitch: Pitch
) => Pitch[] = function createChordDiminishedTriad(rootPitch: Pitch): Pitch[] {
  return [rootPitch, addMinorThird(rootPitch), addDiminishedFifth(rootPitch)];
};

/**
 * Returns true if the input chord is a diminished triad
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordDiminishedTriad: (
  chord: Pitch[]
) => void = function isChordDiminishedTriad(chord: Pitch[]): boolean {
  if (chord.length !== 3) {
    return false;
  }
  const [p0, p1, p2]: Pitch[] = chord;
  return isMinorThird(p0, p1) && isDiminishedFifth(p0, p2);
};

/**
 * Creates a dominant seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordDominantSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordDominantSeventh(rootPitch: Pitch): Pitch[] {
  return [...createChordMajorTriad(rootPitch), addMinorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is a dominant seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordDominantSeventh: (
  chord: Pitch[]
) => void = function isChordDominantSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMajorThird(p0, p1) && isPerfectFifth(p0, p2) && isMinorSeventh(p0, p3)
  );
};

/**
 * Creates a major seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordMajorSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordMajorSeventh(rootPitch: Pitch): Pitch[] {
  return [...createChordMajorTriad(rootPitch), addMajorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is a major seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordMajorSeventh: (
  chord: Pitch[]
) => void = function isChordMajorSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMajorThird(p0, p1) && isPerfectFifth(p0, p2) && isMajorSeventh(p0, p3)
  );
};

/**
 * Creates a minor seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordMinorSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordMinorSeventh(rootPitch: Pitch): Pitch[] {
  return [...createChordMinorTriad(rootPitch), addMinorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is a minor seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordMinorSeventh: (
  chord: Pitch[]
) => void = function isChordMinorSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMinorThird(p0, p1) && isPerfectFifth(p0, p2) && isMinorSeventh(p0, p3)
  );
};

/**
 * Creates a half seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordHalfDiminishedSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordHalfDiminishedSeventh(
  rootPitch: Pitch
): Pitch[] {
  return [...createChordDiminishedTriad(rootPitch), addMinorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is a half seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordHalfDiminishedSeventh: (
  chord: Pitch[]
) => void = function isChordHalfDiminishedSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMinorThird(p0, p1) && isDiminishedFifth(p0, p2) && isMinorSeventh(p0, p3)
  );
};

/**
 * Creates a diminished seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordDiminishedSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordDiminishedSeventh(
  rootPitch: Pitch
): Pitch[] {
  return [
    ...createChordDiminishedTriad(rootPitch),
    addDiminishedSeventh(rootPitch),
  ];
};

/**
 * Returns true if the input chord is a diminished seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordDiminishedSeventh: (
  chord: Pitch[]
) => void = function isChordDiminishedSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMinorThird(p0, p1) &&
    isDiminishedFifth(p0, p2) &&
    isDiminishedSeventh(p0, p3)
  );
};

/**
 * Creates a minor major seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordMinorMajorSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordMinorMajorSeventh(
  rootPitch: Pitch
): Pitch[] {
  return [...createChordMinorTriad(rootPitch), addMajorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is a minor major seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordMinorMajorSeventh: (
  chord: Pitch[]
) => void = function isChordMinorMajorSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMinorThird(p0, p1) && isPerfectFifth(p0, p2) && isMajorSeventh(p0, p3)
  );
};

/**
 * Creates an augmented major seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordAugmentedMajorSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordAugmentedMajorSeventh(
  rootPitch: Pitch
): Pitch[] {
  return [...createChordAugmentedTriad(rootPitch), addMajorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is an augmented major seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordAugmentedMajorSeventh: (
  chord: Pitch[]
) => void = function isChordAugmentedMajorSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMajorThird(p0, p1) && isAugmentedFifth(p0, p2) && isMajorSeventh(p0, p3)
  );
};

/**
 * Creates an augmented seventh chord from a bass/root note
 * @param rootPitch the bass/root note
 * @returns {Pitch[]} an array of Pitch that forms the chord
 */
export const createChordAugmentedSeventh: (
  rootPitch: Pitch
) => Pitch[] = function createChordAugmentedSeventh(rootPitch: Pitch): Pitch[] {
  return [...createChordAugmentedTriad(rootPitch), addMinorSeventh(rootPitch)];
};

/**
 * Returns true if the input chord is an augmented seventh
 * @param chord an array of Pitch that constitutes the chord
 */
export const isChordAugmentedSeventh: (
  chord: Pitch[]
) => void = function isChordAugmentedSeventh(chord: Pitch[]): boolean {
  if (chord.length !== 4) {
    return false;
  }
  const [p0, p1, p2, p3]: Pitch[] = chord;
  return (
    isMajorThird(p0, p1) && isAugmentedFifth(p0, p2) && isMinorSeventh(p0, p3)
  );
};
