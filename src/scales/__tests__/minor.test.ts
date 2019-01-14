import { MinorScale } from '../minor';
import Note from '../../Note';

describe('Minor scale', () => {
  it('should create a minor scale from a root note', () => {
    expect(new MinorScale(Note.D).steps).toEqual([2, 1, 2, 2, 1, 2, 2]);
  });
});
