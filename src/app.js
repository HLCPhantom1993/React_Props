/* 通过props向组件中传递不可变数据 */ 
/* 通过props元素向一个类模版传递数据 <MyClass element={data} /> */
/* 从props中得到数据: this.props.data */

class NoteApp extends React.Component {
    render() {
        /* 定义const变量作为组件中的数据传入不同的组件 */
        const demoTitle = "React Component Props Demo"; 
        const demoDescription = {
            'firstName': '泓霖',
            'lastName': '陈'
        }

        const demoNotes = [
            'Note1',
            'Note2',
            'Note3'
        ]

        return(
            /* 将传入的数据封装在一个变量(wrapper) */
            /* 对 Title 函数传入封装在title里的demoTitle数据, props参数会自动捆绑到title变量 */
            /* 对 Header 组件传入封装在description变量里的demoDescription数据 */
            /* Action 组件中不穿入任何数据 */ 
            <div>
                <Title title={demoTitle} />
                <Head description={demoDescription} />
                <Notes notes={demoNotes} />
                <Action />
            </div>
        );
    }
}

function Title(props) {
    /* 通过props读取其绑定数据变量title的内容 */ 
    /* 注意: props作为函数参数时不加this关键字 */ 
    return <h2>{props.title}</h2>;
}

class Head extends React.Component {
    render() {
        return <h4>{this.props.description.firstName} - {this.props.description.lastName}</h4>;
    }
}

class Notes extends React.Component {
    render() {
        return (
            /* 通过map函数将数组中的元素渲染出来, 然后包装在数据变量中传入下一个组件 */ 
            <div>
                Notes:
                <ol>
                    {this.props.notes.map(note => 
                        <li><Note note={note} /></li>
                    )}
                </ol>
            </div>
        ); 
    }
}

class Note extends React.Component {
    render() {
        /* 对传入的已经包装好的note数据解析 */
        return (
            <div>
                {this.props.note}
                <button style={{margin: 5}}>remove</button>
            </div>
        ); 
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={submit}>
                    <input type="text" name="dataForm" />
                    <button>Add</button>
                </form>
                <br />
                <button onClick={removeAll}>Remove All</button>
            </div>
        );
    }
}

/* 定义函数变量 */ 
const submit = () => {}
const removeAll = () => {}

const appRoot = document.getElementById("app"); 
ReactDOM.render(<NoteApp />, appRoot); 