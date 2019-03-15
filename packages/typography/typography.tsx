// The MIT License
//
// Copyright (c) 2018 Google, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import classnames from 'classnames';
import * as React from 'react';

export interface TypographyProps<T> extends React.HTMLProps<T> {
  children?: React.ReactNode;
  className?: string;
  tag?: string;
}

interface EnhancedProps {
  tag: string;
  classModifier: string;
}

const typographyHOC = <T extends {}>(options: EnhancedProps) => {
  const {tag, classModifier} = options;

  const Typography: React.FunctionComponent<TypographyProps<T>> = ({
    // TODO: clean up after removing eslint react/prop-types
    /* eslint-disable */
    children,
    className = '',
    tag: Tag = tag,
    /* eslint-enable */
    ...otherProps
  }) => {
    const classes = classnames(
      'mdc-typography',
      `mdc-typography--${classModifier}`,
      className
    );

    return (
      // https://github.com/Microsoft/TypeScript/issues/28892
      // @ts-ignore
      <Tag className={classes} {...otherProps}>
        {children}
      </Tag>
    );
  };

  return Typography;
};

export default typographyHOC;
