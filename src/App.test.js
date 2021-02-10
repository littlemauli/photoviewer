import { render, screen } from '@testing-library/react';
import App from './App';


//this is a unit test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

//A unit test to check our imageUrl generation code





//A ‘Regression / Snapshot' test to confirm that I the ‘ImageViewer' component
// doesn’t accidentally change in the future.






 //A Component Test to confirm that when I click a thumbnail,
 // then the thumbnail becomes selected and the ImageViewer updates with the new image.




