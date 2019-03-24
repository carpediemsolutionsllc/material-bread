import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ComponentDemoHeader } from '@components';

import ImageDemo from './ImageDemo';
import SearchFieldDemo from './SearchFieldDemo';
import SearchBarDemo from './SearchBarDemo';
import SubtitleDemo from './SubtitleDemo';
import CustomDemo from './CustomDemo';

export default class Demos extends Component {
  static propTypes = {
    pageHref: PropTypes.string,
  };
  render() {
    const { pageHref } = this.props;
    return (
      <div>
        <ComponentDemoHeader
          pageHref={pageHref}
          description={
            'You can see even more examples in the Storybook playground.'
          }
        />

        <ImageDemo pageHref={pageHref} />
        <SearchFieldDemo pageHref={pageHref} />
        <SearchBarDemo pageHref={pageHref} />
        <SubtitleDemo pageHref={pageHref} />
        <CustomDemo pageHref={pageHref} />
      </div>
    );
  }
}
