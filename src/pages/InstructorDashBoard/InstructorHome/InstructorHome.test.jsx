import React from 'react';
import { render, screen } from '@testing-library/react';
import InstructorHome from './InstructorHome'; // Import your component

describe('InstructorHome', () => {
  const userDetails = {
    displayName: 'John Doe',
    photoURL: 'path-to-photo.jpg',
    _id: '12345',
    email: 'johndoe@example.com',
    date: new Date().toISOString(),
  };

  // Mock the useUser hook to return userDetails
  jest.mock('../../../Hooks/useUser', () => () => [userDetails]);

  it('renders user details correctly', () => {
    render(<InstructorHome />);
    
    expect(screen.getByText('Hi')).toBeInTheDocument();
    expect(screen.getByText(userDetails?.displayName)).toBeInTheDocument();
    expect(screen.getByText('Welcome to Your Dashboard')).toBeInTheDocument();
    expect(screen.getByAltText(userDetails?.photoURL)).toBeInTheDocument();
    expect(screen.getByText(userDetails?._id)).toBeInTheDocument();
    expect(screen.getByText('12345')).toBeInTheDocument();
    expect(screen.getByText('Name:')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Email Address:')).toBeInTheDocument();
    expect(screen.getByText('johndoe@example.com')).toBeInTheDocument();
    expect(screen.getByText('Join Date:')).toBeInTheDocument();
    expect(screen.getByText(userDetails.date)).toBeInTheDocument(); // You may want to format this date as per your component
  });

  // Add more tests as needed for other parts of your component
});
