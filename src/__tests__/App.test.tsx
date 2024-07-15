import React, { act } from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from '../app/App';
import '@testing-library/jest-dom';
import fetchMock from 'jest-fetch-mock';
import InputForm from '../components/inputForm';
import { InputFormProps } from '../store/interface';

test('demo', () => {
  expect(true).toBe(true);
});

test('Renders the main page', () => {
  act(() => {
    render(<App />);
  });

  expect(true).toBeTruthy();
});

test('App component snapshot', () => {
  act(() => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

beforeEach(() => {
  fetchMock.resetMocks();
});

test('Renders the main page', async () => {
  fetchMock.mockResponseOnce(JSON.stringify({}));
});

describe('InputForm component', () => {
  const defaultProps: InputFormProps = {
    onSearch: jest.fn(),
    onError: jest.fn(),
  };

  it('renders without crashing', () => {
    render(<InputForm {...defaultProps} />);
  });

  it('renders an input field', () => {
    const { container } = render(<InputForm {...defaultProps} />);
    const input = container.querySelector('input');
    if (input) {
      expect(input).toBeInTheDocument();
    } else {
      throw new Error('Input element not found');
    }
  });

  it('updates state on input change', () => {
    const { container } = render(<InputForm {...defaultProps} />);
    const input = container.querySelector('input');

    if (input) {
      fireEvent.change(input, { target: { value: 'test' } });
      expect(input.value).toEqual('test');
    } else {
      throw new Error('Input element not found');
    }
  });
});
