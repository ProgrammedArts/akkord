import getInterval from '../getInterval';
import getPitch from '../getPitch';

/**
 * Get a pitch above a diminished eighth interval (11 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished eighth
 */
export const addDiminishedEighth: (
  fromPitch: Pitch
) => Pitch = function addDiminishedEighth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 11 });
};

/**
 * Get a pitch below a diminished eighth interval (11 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished eighth
 */
export const substractDiminishedEighth: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedEighth({
  octave,
  note,
}: Pitch): Pitch {
  return getPitch({ octave, note: note - 11 });
};

/**
 * Determines if the interval between 2 pitches is a diminished eighth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished eighth
 */
export const isDiminishedEighth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedEighth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 11;
};

/**
 * Get a pitch above a perfect eighth interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect eighth
 */
export const addPerfectEighth: (
  fromPitch: Pitch
) => Pitch = function addPerfectEighth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 12 });
};

/**
 * Get a pitch below a perfect eighth interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect eighth
 */
export const substractPerfectEighth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectEighth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 12 });
};

/**
 * Determines if the interval between 2 pitches is a perfect eighth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a perfect eighth
 */
export const isPerfectEighth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isPerfectEighth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 12;
};

/**
 * Get a pitch above an augmented eighth interval (13 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above an augmented eighth
 */
export const addAugmentedEighth: (
  fromPitch: Pitch
) => Pitch = function addAugmentedEighth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 13 });
};

/**
 * Get a pitch below an augmented eighth interval (13 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below an augmented eighth
 */
export const substractAugmentedEighth: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedEighth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 13 });
};

/**
 * Determines if the interval between 2 pitches is an augmented eighth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is an augmented eighth
 */
export const isAugmentedEighth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedEighth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 13;
};
