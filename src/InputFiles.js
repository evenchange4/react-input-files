// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

export type Props = {
  children: React.Node,
  onChange: (
    files: Array<File>,
    e: SyntheticEvent<HTMLInputElement>,
  ) => void | Promise<void>,
  accept?: string,
  style?: Object,
  multiple?: boolean,
};

class InputFiles extends React.PureComponent<Props> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func, // (files: Array<File>, e: SyntheticEvent<HTMLInputElement>) => void,
    accept: PropTypes.string,
    style: PropTypes.object, // eslint-disable-line
    multiple: PropTypes.bool,
  };

  static defaultProps = {
    accept: 'image/*',
  };

  input = React.createRef<React.ElementRef<'input'>>();

  onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const input = this.input.current;
    if (input) input.click();
  };

  onChange = (e: Object) => {
    const { onChange } = this.props;
    onChange(e.target.files, e);
  };

  render() {
    const { children, accept, style, multiple } = this.props;
    const { input, onClick, onChange } = this;

    return (
      <React.Fragment>
        <div
          onClick={onClick}
          onKeyPress={onClick}
          role="button"
          tabIndex="0"
          style={{ display: 'inline-block', ...style }}
        >
          {children}
        </div>

        <Portal>
          <input
            ref={input}
            type="file"
            accept={accept}
            onChange={onChange}
            style={{ display: 'none' }}
            multiple={multiple}
          />
        </Portal>
      </React.Fragment>
    );
  }
}

export default InputFiles;
