import React, { Fragment, Component } from 'react'

import Editor from 'react-simple-code-editor'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

const exampleCode = `
(function someDemo() {
  var test = "Hello World!";
  console.log(test);
})();

return () => <App />;
`

const styles = {
  root: {
    
    fontFamily: '"Dank Mono", "Fira Code", monospace',
    ...theme.plain
  }
}

class EditorExample extends Component {
  state = { code: exampleCode }

  onValueChange = code => {
    this.setState({ code })
  }

  highlight = code => (
    <Highlight {...defaultProps} theme={theme} code={code} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Fragment>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
            </div>
          ))}
        </Fragment>
      )}
    </Highlight>
  )

  render() {
    return (

    )
  }
}
export default EditorExample
