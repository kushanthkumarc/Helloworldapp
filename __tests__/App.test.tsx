/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';

describe('App Component', () => {
  test('renders correctly', () => {
    const tree = ReactTestRenderer.create(<App />);
    expect(tree).toBeTruthy();
  });

  test('component renders without crashing', () => {
    expect(() => {
      ReactTestRenderer.create(<App />);
    }).not.toThrow();
  });

  test('component exists', () => {
    expect(App).toBeDefined();
    expect(typeof App).toBe('function');
  });

  test('component can be instantiated', () => {
    const instance = ReactTestRenderer.create(<App />);
    expect(instance).toBeDefined();
  });
});
