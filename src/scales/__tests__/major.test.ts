import { MajorScale } from '../major';
import Note from '../../Note';

describe('Major scale', () => {
  it('should create a major scale from a root note', () => {
    expect(new MajorScale(Note.D).steps).toEqual([2, 2, 1, 2, 2, 2, 1]);
  });
});
