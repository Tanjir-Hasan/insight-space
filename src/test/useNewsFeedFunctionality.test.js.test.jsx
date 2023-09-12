import { describe, it } from 'vitest';
import { createRenderer } from '@vitest/react';
import useNewsFeedFunctionality from '../Hooks/useNewsFeedFunctionality';

const renderer = createRenderer();

describe('useNewsFeedFunctionality', () => {
  it('should increment reactCount when handleReact is called', () => {
    const { handleReact } = useNewsFeedFunctionality();
    handleReact();
    expect(handleReact).toBe([]);
  });

  it('should toggle bookmarked when handleBookMark is called', () => {
    const { handleBookMark, bookmarked } = useNewsFeedFunctionality();
    handleBookMark();
    expect(bookmarked).toBe(true);
  });

  it('should add a comment when handleAddComment is called', () => {
    const { handleAddComment} = useNewsFeedFunctionality();
    handleAddComment();
    expect(handleAddComment).toContain("");
  });

  // Add similar tests for other functions
});