import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// REACT_APP_API_URL=http://a42f5461f582449a29fdc102149e9fd5-390825282.us-east-1.elb.amazonaws.com/api
