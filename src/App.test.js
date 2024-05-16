import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders header text', () => {
    render(<App />);
    const headerText = screen.getByText(/Bulgass IT-academy/i);
    expect(headerText).toBeInTheDocument();
  });

  test('renders social links', () => {
    render(<App />);
    const facebookIcon = screen.getByTestId('facebook-icon');
    const twitterIcon = screen.getByTestId('twitter-icon');
    const instagramIcon = screen.getByTestId('instagram-icon');
    expect(facebookIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(instagramIcon).toBeInTheDocument();
  });

  test('scrolls to top when scroll top button is clicked', () => {
    render(<App />);
    window.scrollTo = jest.fn();
    const scrollTopButton = screen.getByText(/scroll top/i);
    scrollTopButton.click();
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });
  });
});
