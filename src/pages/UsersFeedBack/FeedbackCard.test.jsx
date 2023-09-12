// import { render, screen } from "@testing-library/react";

// import FeedbackCard from "./FeedbackCard";

// it("", () => {
//   render(<FeedbackCard></FeedbackCard>);
//   const cardsContainer = screen.getByTestId("feedbacktable"); // Replace "cards-container" with the actual data-testid or selector for your container
//   const table = cardsContainer.querySelectorAll(".table"); // Replace ".card" with the actual selector for your card components
//   expect(table.length).toBe(3);
// });

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackCard from './FeedbackCard'; // Import your component

describe('FeedbackCard', () => {
  const feedbacks = [
    {
      _id: '1',
      userName: 'John Doe',
      email: 'johndoe@example.com',
      message: 'This is a test feedback',
      rating: 5,
      date: new Date().toISOString(),
    },
    // Add more feedback objects as needed for testing
  ];

  const handleDelete = jest.fn();
  const handleUpdate = jest.fn();

  beforeEach(() => {
    render(
      <FeedbackCard
        feedbacks={feedbacks}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    );
  });

  it('renders feedback data correctly', () => {
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
    expect(screen.getByText('This is a test feedback')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('calls handleDelete when the remove button is clicked', () => {
    const removeButton = screen.getByAltText('Delete');
    fireEvent.click(removeButton);
    expect(handleDelete).toHaveBeenCalledWith('1'); // Assuming '1' is the _id of the feedback to delete
  });
});

