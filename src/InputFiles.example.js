// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import InputFiles from '.';

storiesOf('InputFiles', module).add(
  'Basic',
  () => (
    <InputFiles onChange={files => action('onDrop')(files)}>
      <button type="button">Upload</button>
    </InputFiles>
  ),
  {
    info: {
      text: `API: https://github.com/evenchange4/react-input-files#api`,
      inline: true,
    },
  },
);
