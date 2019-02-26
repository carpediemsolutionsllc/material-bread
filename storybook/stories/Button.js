import React from 'react';
import { storiesOf } from '../helpers/storiesOf';

import { Button } from '../../src/index';
import Header from '../components/Header';
import Container from '../components/Container';

storiesOf('Buttons', module)
  .add('Text Button', () => (
    <Container>
      <Header title={'Text Button'} />

      <Button>Button</Button>
      <Button disabled={true}>Disabled</Button>
      <Button disableRipple={true}>Disable Ripple</Button>
      <Button fullWidth={true}>Full Width</Button>

      <Button compact={true}>SM</Button>

      <Button loading={true}>SM</Button>
    </Container>
  ))
  .add('Outlined Button', () => (
    <Container>
      <Header title={'Outlined Button'} />

      <Button type="outlined">Button</Button>
      <Button type="outlined" disabled={true}>
        Disabled
      </Button>
      <Button type="outlined" disableRipple={true}>
        Disable Ripple
      </Button>
      <Button type="outlined" fullWidth={true}>
        Full Width
      </Button>
      <Button type="outlined" compact={true}>
        SM
      </Button>
      <Button type="outlined" loading={true}>
        SM
      </Button>
    </Container>
  ))
  .add('Contained Button', () => (
    <Container>
      <Header title={'Contained Button'} />

      <Button type="contained">Button</Button>
      <Button type="contained" disabled={true}>
        Disabled
      </Button>
      <Button type="contained" disableRipple={true}>
        Disable Ripple
      </Button>
      <Button type="contained" fullWidth={true}>
        Full Width
      </Button>
      <Button type="contained" compact={true}>
        SM
      </Button>
      <Button type="contained" loading={true}>
        SM
      </Button>
    </Container>
  ));
