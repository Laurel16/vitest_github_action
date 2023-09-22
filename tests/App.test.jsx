import { render, screen, fireEvent } from '@testing-library/react';
import App from "../src/App";

describe('App', () => {
  it('renders headline', () => {
    render(<App />);
    const headline = screen.getByText("Vite + React");
   
    expect(headline).toBeInTheDocument();
    
  });
  it('increment the counter', () => {
    render(<App />);
    
    const countElement = screen.getByText("count is 0");
   
    fireEvent.click(countElement);
    expect(countElement).toHaveTextContent("count is 1");
  });
});


  
  