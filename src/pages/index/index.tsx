import { useState } from 'react'
import { View, WebView } from '@tarojs/components'
// import './index.less'

function Index() {
  console.log('====', process.env.TARO_APP_ENV)

  const [nodes, setNodes] = useState(
    [{
      name: 'div',
      attrs: {
        class: 'div_class',
        style: 'line-height: 60px; color: red;'
      },
      children: [{
        type: 'text',
        text: 'Hello World!'
      }]
    }]
  )

  function onEditorReady() {
    console.log('editor ready')
  }

  return (
    <View className="nutui-react-demo">
      {/* 小程序下 webview的承载 */}
      <WebView  src='http://10.150.14.247:10086/#/pages/editor/index'/>
    </View>
  )
}

export default Index
