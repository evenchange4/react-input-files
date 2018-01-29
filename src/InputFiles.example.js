// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import InputFiles from '.';

storiesOf('InputFiles', module).add(
  'Basic',
  withInfo({
    text: `API: https://github.com/evenchange4/react-input-files#api`,
    inline: true,
  })(() => (
    <InputFiles onChange={files => action('onDrop')(files)}>
      <button>Upload</button>
    </InputFiles>
  )),
);
