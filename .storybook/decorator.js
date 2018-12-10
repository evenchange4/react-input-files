// @flow
import * as React from 'react';

export default function(
  renderStory: () => React.Element<*> | Array<React.Element<*>>,
) {
  return <div id="snapshot">{renderStory()}</div>;
}
