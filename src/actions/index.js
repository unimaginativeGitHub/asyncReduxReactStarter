export const REQUEST_REDDITS = 'REQUEST_REDDITS';
export const RECEIVE_REDDITS = 'RECEIVE_REDDITS';

export const requestRedditIndex = (selectedReddit) => ({
  type: REQUEST_REDDITS,
  reddit: selectedReddit
});

export const recievedReddits = (json) => ({
  type: RECEIVE_REDDITS,
  reddits: json
});

export const fetchRedditIndex = () => dispatch => {
  dispatch(requestRedditIndex());
  return fetch('https://www.reddit.com/r/popular.json')
    .then(response => response.json())
    .then(json => dispatch(recievedReddits(json.data.children)));
};
