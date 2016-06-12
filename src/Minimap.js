import React, {Component} from 'react'
import Surface from 'react-mirror'

import Window from './Window'
import MockWindow from './MockWindow'
import MinimapWrapper from './MinimapWrapper'
import MinimapInner from './MinimapInner'


export default class Minimap extends Component {
  render() {
    const {children, className, contain, ...props} = this.props;

    const Window_ = !contain ? Window : MockWindow;

    const minimap = <MinimapWrapper {...props}>
      <MinimapInner parent={this} />
    </MinimapWrapper>

    return <Window_ minimap={minimap} className={className}>
      <Surface ref="surface">
        <div className="react-minimap-content">{children}</div>
      </Surface>
    </Window_>
  }
}
