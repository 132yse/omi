webpackJsonp([13],{111:function(e,r){e.exports="## Radio\r\n\r\n\u5355\u9009\u6309\u94ae\u5141\u8bb8\u7528\u6237\u5728\u67e5\u770b\u6240\u6709\u53ef\u7528\u9009\u9879\u65f6\u4ece\u4e00\u7ec4\u4e2d\u9009\u62e9\u4e00\u4e2a\u9009\u9879\u3002\r\n\r\n## \u4f7f\u7528\r\n\r\n```html\r\n<m-radio id='r1' value=\"1\" label='Label' checked name=\"abc\"> </m-radio>\r\n<m-radio id='r2' value=\"2\" label='Label' name=\"abc\"> </m-radio>\r\n<m-radio checked label='checked'> </m-radio>\r\n<m-radio disabled label='disabled'> </m-radio>\r\n```\r\n\r\n## Omi \u4e2d\u4f7f\u7528\r\n\r\nJSX:\r\n\r\n```jsx\r\n<m-radio onSelected={this.onSelected} value={1} label='Label' checked={!this.checked} name=\"abc\"></m-radio>\r\n<m-radio  onSelected={this.onSelected} value={2} label='Label' checked={this.checked} name=\"abc\"></m-radio>\r\n<m-radio checked label='checked' onclick={()=>{this.update()}}> </m-radio>\r\n<m-radio disabled label='disabled'></m-radio>\r\n```\r\n\r\n## API\r\n\r\n### Props\r\n\r\n|  **Name**  | **Type**        | **Defaults**  | **Details**  |\r\n| ------------- |:-------------:|:-----:|:-------------:|\r\n| label | string | -- | \u53f3\u4fa7\u6587\u672c\u5185\u5bb9 |\r\n| disabled | boolean | -- | \u7981\u7528\u5355\u9009\u6309\u94ae |\r\n| checked | boolean | -- | \u521d\u59cb\u72b6\u6001\u4e3a\u9009\u4e2d |\r\n| value | string | -- | \u5355\u9009\u6309\u94ae\u7684\u503c |\r\n| name | string | -- | \u4e3a\u5355\u9009\u6309\u94ae\u5206\u7ec4 |\r\n| onSelected | function | -- | \u9009\u62e9\u89e6\u53d1 |\r\n"}});
//# sourceMappingURL=13.9e994820.chunk.js.map