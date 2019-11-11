
// export default class Greeting extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: '',
//         }
//         this.handleNameChange = this.handleNameChange.bind(this)
//     }

//     handleNameChange(e) {
//         this.setState({
//             name: e.target.value
//         });
//     }

//     render() {
//         return(
//             <section>
//                 <div>Name:</div>
//                 <input 
//                     value={this.state.name}
//                     onChange={this.handleNameChange}/>
//             </section>
//         );
//     }
// }
import React, { useState, useEffect } from 'react';
 

export default function Greeting (props){
    const name = useFormInput('ugur')
    const surname = useFormInput('donmez')
    // const [name, setName] = useState('ugur')
    // const [surname, setSurname] = useState('donmez')
    const width = useWindowWidth()
    useDocumentTitle(name.value + ' ' + surname.value)

    

    // componentDidMounth
    // componentDidUpdate
    // useEffect(() => {
    //     document.title = name + " " + surname
    // })

    // function handleNameChange(e) {
    //     setName(e.target.value)
    // }

    // function handleSurnameChange(e) {
    //     setSurname(e.target.value)
    // }

    return(
        <section>
            <div>
                Name:
            </div>
            {/* <input 
                value={name}
                onChange={handleNameChange}/> */}

            <input {...name} />

            <div>
                Surname:
            </div>
            {/* <input 
                value={surname}
                onChange={handleSurnameChange}/> */}

            <input {...surname} />


            <div>
                {width}
            </div>
        </section>
    );
}

function useFormInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    function handleChange(e) {
        setValue(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }
}

function useDocumentTitle(title) {
    useEffect(() => {
        document.title = title
    })
}

// Custom hook
// always start with use
function useWindowWidth () {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize)
        // componentWillUnmount
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })

    return width
}