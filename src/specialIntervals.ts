import getPitch from './getPitch';

/**
 * Get a pitch above a major second interval (1 whole tone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major second
 */
export const addMajorSecond: (
  fromPitch: Pitch
) => Pitch = function addMajorSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 2 });
};

/**
 * Get a pitch below a major second interval (1 whole tone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major second
 */
export const substractMajorSecond: (
  fromPitch: Pitch
) => Pitch = function substractMajorSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 2 });
};

/**
 * Get a pitch above a major third interval (2 whole tones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major third
 */
export const addMajorThird: (
  fromPitch: Pitch
) => Pitch = function addMajorThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 4 });
};

/**
 * Get a pitch below a major third interval (2 whole tones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major third
 */
export const substractMajorThird: (
  fromPitch: Pitch
) => Pitch = function substractMajorThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 4 });
};

/**
 * Get a pitch above a perfect fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect fourth
 */
export const addPerfectFourth: (
  fromPitch: Pitch
) => Pitch = function addPerfectFourth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 5 });
};

/**
 * Get a pitch below a perfect fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect fourth
 */
export const substractPerfectFourth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectFourth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 5 });
};

/**
 * Get a pitch above a perfect fifth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect fifth
 */
export const addPerfectFifth: (
  fromPitch: Pitch
) => Pitch = function addPerfectFifth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 7 });
};

/**
 * Get a pitch below a perfect fifth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect fifth
 */
export const substractPerfectFifth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectFifth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 7 });
};

/**
 * Get a pitch above a major sixth interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major sixth
 */
export const addMajorSixth: (
  fromPitch: Pitch
) => Pitch = function addMajorSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 9 });
};

/**
 * Get a pitch below a major sixth interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major sixth
 */
export const substractMajorSixth: (
  fromPitch: Pitch
) => Pitch = function substractMajorSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 9 });
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
 * Get a pitch above a perfect eighth interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect eighth
 */
export const addPerfectEighth: (
  fromPitch: Pitch
) => Pitch = function addPerfectEighth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 12 });
};

/**
 * Get a pitch below a perfect eighth interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect eighth
 */
export const substractPerfectEighth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectEighth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 12 });
};

/**
 * Get a pitch above a perfect octave interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect eighth
 */
export const addPerfectOctave: (fromPitch: Pitch) => Pitch = addPerfectEighth;

/**
 * Get a pitch below a perfect octave interval (12 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect eighth
 */
export const substractPerfectOctave: (
  fromPitch: Pitch
) => Pitch = substractPerfectEighth;
