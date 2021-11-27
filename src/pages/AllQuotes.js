//
//

import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
  {
    id: 'q1',
    author: 'Name1',
    text: 'Learning React 1',
  },
  {
    id: 'q2',
    author: 'Name2',
    text: 'Learning React 2',
  },
  {
    id: 'q3',
    author: 'Name3',
    text: 'Learning React 3',
  },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
