import getPitch from '../getPitch';
import getInterval from '../getInterval';

/**
 * Get a pitch above a diminished seventh interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished seventh
 */
export const addDiminishedSeventh: (
  fromPitch: Pitch
) => Pitch = function addDiminishedSeventh({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 9 });
};

/**
 * Get a pitch below a diminished seventh interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished seventh
 */
export const substractDiminishedSeventh: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedSeventh({
  octave,
  note,
}: Pitch): Pitch {
  return getPitch({ octave, note: note - 9 });
};

/**
 * Determines if the interval between 2 pitches is a diminished seventh
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished seventh
 */
export const isDiminishedSeventh: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedSeventh(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 9;
};

/**
 * Get a pitch above a minor seventh interval (10 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a minor seventh
 */
export const addMinorSeventh: (
  fromPitch: Pitch
) => Pitch = function addMinorSeventh({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 10 });
};

/**
 * Get a pitch below a minor seventh interval (10 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a minor seventh
 */
export const substractMinorSeventh: (
  fromPitch: Pitch
) => Pitch = function substractMinorSeventh({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 10 });
};

/**
 * Determines if the interval between 2 pitches is a minor seventh
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a minor seventh
 */
export const isMinorSeventh: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMinorSeventh(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 10;
};

/**
 * Get a pitch above a major seventh interval (11 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major seventh
 */
export const addMajorSeventh: (
  fromPitch: Pitch
) => Pitch = function addMajorSeventh({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 11 });
};

/**
 * Get a pitch below a major seventh interval (11 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major seventh
 */
export const substractMajorSeventh: (
  fromPitch: Pitch
) => Pitch = function substractMajorSeventh({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 11 });
};

/**
 * Determines if the interval between 2 pitches is a major seventh
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a major seventh
 */
export const isMajorSeventh: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMajorSeventh(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 11;
};

/**
 * Get a pitch above au augmented seventh interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above au augmented seventh
 */
export const addAugmentedSeventh: (
  fromPitch: Pitch
) => Pitch = function addAugmentedSeventh({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 12 });
};

/**
 * Get a pitch below au augmented seventh interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below au augmented seventh
 */
export const substractAugmentedSeventh: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedSeventh({
  note,
  octave,
}: Pitch): Pitch {
  return getPitch({ octave, note: note - 12 });
};

/**
 * Determines if the interval between 2 pitches is au augmented seventh
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is au augmented seventh
 */
export const isAugmentedSeventh: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedSeventh(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 12;
};
