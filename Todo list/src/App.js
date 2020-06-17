import React,{Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem'


//注意：在写代码的时候千万不能关闭cmd，他是提供服务的。如果给关闭了将不提供服务
//了，所以也就刷新不出来页面了


/*
/**这里的extends是继承,,并且这个是类函数，类函数中的构造一个函数的时候
 * 前面不用加function，但是像下面的那个在构造函数的时候就一定要加function
 * 否则会报错，之前就出过这样的问题
 */

//这里只是声明定义了一个组件，在实际的使用中我们是使用的实例
//比如这里的APP的实例的使用就是在入口文件index中使用了这个组件
class App extends Component {
   /*在react中我们的编程思想是操作数据，
   所以我们想要点击一下add就可以向ul-li里面来去添加一项数据的话我们就先定义一个数据，
   我们使用的是es6语法，constructor是一个构造函数 */
   /** 当这个组件已创建的时候，constructor就会被执行*/
   //如果创建了类的实例（实质上就是在一个组件中渲染另一个组件），那么就一定会调用这个组件的constructor构造器，  
   //只有组件实例化了才能调用定义的这个组件的render方法，才能在要调用的这个组件里一级一级的传最后渲染到页面当中去
   //也会出现只定义了这个类但是并没有实例化这个组件
   constructor(props) {
     /**初始化，其实原来是继承，es6中是先继承父类的对象，然后在子类中进行修改，
      * 如果没有super,那么在子类中this就没有指向，没有对象可以指
      * es5和es6的区别就在于es6是先继承父类中的对象然后在子类中进行修改
      * super()是指的父类的构造器，es6中如果有继承就需要先执行父类的构造器
      */
     super(props);
     /**接着就是在这个组件里面创建一个数据项，
      * 这个数据项里面可以存放很多的数据内容 
      * this.state = "{}"一个对象
      * 这里后面用一个{}括起来是因为他是一个对象*/
     this.state = {
       /**我们想要在ul中显示标签，但是我们现在不使用以前
        * 的标签来显示了，我们使用数据来来控制显示
        * 这里我们把这个数据的名字定位list
        */

        /**这里刚才忘记了加两个逗号报错 */
       list: [
         'learn react',
         'learn english'
       ],
       inputValue:''

     }
//react中class需要进行this的绑定，最推荐的一种方式就是这一种，这个可以实现性能优化
//另外两种不推荐，因为没触发一次不是重新生成一次对象就是重新渲染一次，
     this.handleInputChange = this.handleInputChange.bind(this);
     this.handleBtnClick = this.handleBtnClick.bind(this);
     this.handleDelete = this.handleDelete.bind(this);
   }
  handleInputChange(e) {
    this.setState({
      inputValue:e.target.value,
    })
   
   
    
  }
  handleBtnClick() {
    /** 
     * //下面的button里面的{}的原因这里的onClick后面会写{}是因为jsx语法的问题，在标签里面写js代码需要用{}括起来 
     * 这里的srtState里面会有{}是因为list是一个对象，对象要用{}括起来
    */
    this.setState({
      /**这的...是es6中的展开， */
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    })
   
  }
/*
  handleItemClick(index) {
    
    /** 这里是复制一个list,如果不复制的话会使得使用工具比较复杂，后面使用框架的时候性能可能不是很好
      const list=[...this.state.list]
      list.splice(index,1);
      this.setState({
        list
      })
  }*/

  handleDelete(index) {
    //复制初始化状态栏中的list值，前面的const是一个定值类型，
      const list=[...this.state.list]
    //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。，后面的是要删除的项目的数量。删除或者添加完成之后还会返回一个数组
      list.splice(index,2);
      this.setState({
    //这里的list是上面的list删除了指定项之后的数组
        list
      })
  }
//普通函数的this永远指向的都是调用它的对象，而箭头函数永远指向的都是全局
/*class Btn extends React.Component{
     render() {      
          return(<button onClick={this.press()}>开关</button> )
    }
     press(){console.log(this)}
}      
ReactDOM.render( <Btn/>,document.getElementById('example')      );
this.press()的this指向当前作用域Btn，而react内部return是执行了React.createElement这个button按钮，因此改变了原本指向windows的this的指向，因此当前环境下是指向undefined，如果return的不是DOM的标签而是另外的组件比如CustomButton，那么this指向的就会是这个另外的组件CustomButton的作用域
箭头函数在书写上等同于匿名函数press=function(){}，但是实际上箭头函数默认已经将当前作用域绑定了，因此onClick不用bind(this)，press函数里面的this指向就已经指向了Btn作用域

但是由于使用箭头函数容易出错，所以建议还是使用手动绑定的方法

关于this，，，，js中的和jq中的原型继承中的this都不用自己重新绑定,回调
es6语法：es绑定时间回调的是全局？？？/?，解决办法一个是使用es6的箭头函数解决；2是手动绑定的，建议使用手动绑定
 但是普通函数的就需要手动帮顶一下
 普通函数的this永远指向的都是调用它的对象，而箭头函数永远指向的都是全局

*/
  getTodoItems() {
    return(
    this.state.list.map((item,index) => {
      return (
        //key是React中用于追踪哪些列表中元素被修改、
        //删除或者被添加的辅助标识。在diff算法中，key用来判断该元素节点是被移动过来的还是新创建的元素，减少不必要的元素重复渲染。
        <TodoItem delete={this.handleDelete} key={index} content={item} index={index}>
          
        </TodoItem>
        
      )
      //return<li  onClick={this.handleItemClick.bind(this,index)}>{item}</li>
    })
    )
  }
//父组件通过属性向子组件传递参数，子组件通过props接受父组件传递过来的参数
render() {
    return (
      
      <Fragment>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> 
        </header>
        <article className="App-artical">
          <div>
            请输入内容：<input value={this.state.inputValue} onChange={this.handleInputChange}></input>
            
            <button className='red-btn'onClick={this.handleBtnClick}>add</button>
          </div>
          <ul>
            {this.getTodoItems()}
          </ul>
        </article>
      </Fragment>
      
    );
  }
}



/*这个还是使用函数然后来返回函数值的，但是这个我自己写的时候出现了自定义函数时；的问题，所以使用上面的创建组件的方法
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header>
      <article className="App-artical">
        <div>
          <input></input>
          <button onClick={this.handleBtnClick}>add</button>
        </div>
        <ul>
          <li>learn react</li>
          <li>learn english</li>
        </ul>
      </article>
    </div>
  );
}*/

//这个是es6的默认输出，也可以直接加入到创建类的那里，
//将export default 放在创建类的前面就不用这一句的输出了
export default App;



