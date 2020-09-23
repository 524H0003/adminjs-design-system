import styled from 'styled-components'
import { TypographyProps, SpaceProps } from 'styled-system'

import themeGet from '../../utils/theme-get'
import CaptionShared from './caption-shared'

const CardTitle = styled('div')<TypographyProps & SpaceProps>`
  ${CaptionShared};
  font-size: ${themeGet('fontSizes', 'md')};
  line-height: ${themeGet('lineHeights', 'lg')};
`

export {
  CardTitle as default,
  CardTitle,
}
