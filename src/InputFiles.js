// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';

class InputFiles extends React.Component<{
  children: React.Node,
  onChange: (files: Array<Object>, e: SyntheticEvent<HTMLInputElement>) => void,
  accept?: string,
  style?: Object,
}> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func, // (files: Array<Object>, e: SyntheticEvent<HTMLInputElement>) => void,
    accept: PropTypes.string,
    style: PropTypes.object,
  };
  static defaultProps = {
    accept: 'image/*',
  };
  onInputRef = (node: any): void => {
    this.input = node;
  };
  onClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (this.input) this.input.click();
  };
  onChange = (e: Object) => {
    this.props.onChange(e.target.files, e);
  };
  input: ?React.ElementRef<'input'>;
  render() {
    const { children, accept, style } = this.props;
    const { onInputRef, onClick, onChange } = this;

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
            ref={onInputRef}
            type="file"
            accept={accept}
            onChange={onChange}
            style={{ display: 'none' }}
          />
        </Portal>
      </React.Fragment>
    );
  }
}

export default InputFiles;
