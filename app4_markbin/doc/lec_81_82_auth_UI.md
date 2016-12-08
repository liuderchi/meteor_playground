# Lec 81 82 Auth UI

## Date

  - 2016-12-08

## Description

  - notes for lec 81, 82 about adding auth form with default DOM render engine `blaze` in React.

## NOTES

  - `meteor add accounts-ui accounts-password`
      - meteor support built in auth UI component powered by blaze
  - insert component with different rendering in React
      - implement `componentDidMount`, `componentWillUnmount`
      - `blaze.render()` and `blaze.remove()`
  - `ReactDOM` is about DOM manipulation with component
      - `ReactDOM.render()`, `ReactDOM.findDOMNode()`
