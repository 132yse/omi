import { define, render, WeElement } from 'omi'
import './assets/index.css'
import '../../src/components/data/pagination'
import '../../src/components/form/adjustment'
import '../../src/components/form/button'
import '../../src/components/data/progress'
import '../../src/components/data/timeline'
import '../../src/components/others/nav'
import '../../src/components/others/dialog'
import '../../src/components/others/icon'
import '../../src/components/others/tab'

define('my-app', class extends WeElement {
  onChange = v => {
    console.log('page' + v)
  }

  onAdjustmentChange = v => {
    console.log(v)
  }

  install() {
    this.navIndex = 0
    this.tabIndex = 0
    this.dialogShow = false
  }

  navChange = (index) => {
    this.navIndex = index
    this.update()
  }

  tabChange = (index) => {
    this.tabIndex = index
    this.update()
  }

  closeDialog = () => {
    this.dialogShow = false
    this.update()
  }

  showDialog = () => {
    this.dialogShow = true
    this.update()
  }

  onConfirm = () => {
    this.dialogShow = false
    this.update()
  }
  
  
  render() {
    return (
      <div class='ctn'>
        <o-pagination
          total={125}
          currentPage={2}
          pageSize={10}
          onChange={this.onChange}
        />

        <br />
        <o-adjustment
          onChange={this.onAdjustmentChange}
          min={1}
          max={10}
          step={1}
          value={2}
          label="描述文字"
        />

        <br />
        <o-progress
          bgColor='#ccc'
          innerColor='#01DE6C'
          value={50}
        />

        <br />
        <o-timeline />

        <br />
        <o-button type='primary'>创建新项目</o-button>
        <o-button onClick={() => { console.log(1) }}>管理项目</o-button>
        <o-button type='disabled'>创建新项目</o-button>
        <br />

        <o-nav onChange={this.navChange}>
          <item active={this.navIndex === 0}>我的项目</item>
          <item active={this.navIndex === 1}>所有项目</item>
        </o-nav>

        <br />
        <br />
        <o-button onClick={this.showDialog}>显示弹窗</o-button>


        <o-dialog onClose={this.closeDialog} onConfirm={this.onConfirm} show={this.dialogShow}>
          
          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
          <div>我是内容</div>
        </o-dialog>

        <br />
        <br />
        <o-icon type='loading' rotate></o-icon>
        <o-icon type='close' ></o-icon>

        <br />
        <br />

        <o-tab onChange={this.tabChange}>
          <item active={this.tabIndex === 0}>朋友相册</item>
          <item active={this.tabIndex === 1}>时刻视频</item>
        </o-tab>
        
      </div>
    )
  }

  css(){
    return `
    .ctn{
      margin: 10px;
    }`
  }
})

render(<my-app />, 'body')