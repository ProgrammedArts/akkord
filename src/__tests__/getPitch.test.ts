import getPitch, { GetPitchOptions } from '../getPitch';
import Note from '../Note';

describe('getPitch', () => {
  it('should get the proper pitch based on a note and an octave', () => {
    const result: Pitch = getPitch({ note: Note.A, octave: 5 });
    expect(result.note).toBe(Note.A);
    expect(result.octave).toBe(5);
    expect(result.frequency).toBe(880);
  });

  it('should get the proper pitch if the note is beyond the scale (octave above)', () => {
    const result: Pitch = getPitch({ note: 19, octave: 5 });
    expect(result.note).toBe(Note.G);
    expect(result.octave).toBe(6);
    expect(result.frequency).toBe(1567.9817439269975);
  });

  it('should get the proper pitch if the note is beyond the scale (2 octaves above)', () => {
    const result: Pitch = getPitch({ note: 26, octave: 5 });
    expect(result.note).toBe(Note.D);
    expect(result.octave).toBe(7);
    expect(result.frequency).toBe(2349.318143339261);
  });

  it('should get the proper pitch if the note is beyond the scale (2 octaves below)', () => {
    const result: Pitch = getPitch({ note: -13, octave: 5 });
    expect(result.note).toBe(Note.B);
    expect(result.octave).toBe(3);
    expect(result.frequency).toBe(246.941650628062);
  });

  it('should note compute a pitch that has already been computed', () => {
    const powSpy = jest.spyOn(Math, 'pow');
    const result: Pitch = getPitch({ note: Note.A, octave: 5 });
    expect(result.note).toBe(Note.A);
    expect(result.octave).toBe(5);
    expect(result.frequency).toBe(880);
    expect(powSpy).not.toHaveBeenCalled();
    powSpy.mockRestore();
  });
});
