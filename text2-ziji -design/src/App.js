import React,{Component,Fragment} from 'react';

import './App.css';



class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list:[
        '首页','产品详情','关于我们','更多'
      ],
      aside:['单卡机','多卡机','指挥机','核心板','模组','主板'],
      a:['http://www.hanyou-china.com/','http://www.hanyou-china.com/product.html','http://www.hanyou-china.com/contact_us.html',
    'http://www.hanyou-china.com/contact_us.html']

    }
    this.handleLiClick = this.handleLiClick.bind(this);
  }

  handleLiClick() {
    /*
    var sum = 0;
    for(var i = 0;i < 5; i++) {
        sum +=i;
    }
    return(console.log(sum))*/

    var text = document.getElementsByClassName("p1");
    text.style.display = "block";
  }

  render() {
  
    return(
      <Fragment>
        <header className="App-header">
          <ul className="App-header-ul">
            {this.state.list.map((item,index) => {
              return(
                //这里怎么能让每个遍历过的对应链接？？？？/??
                  <li className="App-header-li" onClick={this.handleLiClick} key={index}>{item}</li>
              )
              
            })
            }
          </ul>
          <p className="p1">这个是最简单的点击事件</p>
        </header>
        <aside className="App-aside">
          <ul className="App-aside-ul">
            {
              this.state.aside.map((item,index) =>{
                return(
                <li key={index}>{item}</li>
                )
              })
            }
          </ul>
        </aside>
        <article className="App-artical">
          <header className="App-artical-header">
            <label>人员考勤表</label>
          </header>
          <article className="App-artical-artical">
            <table className="table">
              <thead className="App-TabHead">
                <tr className="App-TabHead-Tr">
                  <td className="App-TabHead-Td1"></td>
                  <td className="App-TabHead-Td2"></td>
                  <td className="App-TabHead-Td3"></td>
                  <td className="App-TabHead-Td4"></td>
                </tr>
              </thead>
              <tbody>

              </tbody>
              <tfoot>

              </tfoot>
            </table>
          </article>
        </article>
        <footer>

        </footer>
      </Fragment>
    )
  }

}


export default App;
