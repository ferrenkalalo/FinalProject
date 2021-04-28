import { Component } from "react";

class ListStudent extends Component{
   state = {
       subTitle: 'Welcome',
   };

   handleChange = () => {
       this.setState({subTitle: "Selamat Datang"});
   };

   componentDidMount(){
       console.log("Component Did Mount dijalankan");
   }

   componentDidUpdate(){
       console.log("Componenet Did Update dijalankan");
   }

   componentWillUnmount(){
       console.log("Componenet Will Unmount dijalankan");
   }

    render(){
        console.log("Render dijalankan");
        const {title, students} = this.props;
        return(
            <>
            <h3>{title}</h3>
            <p>{this.state.subTitle}</p>
            <ul>
             {
               students.map((student) => {
                 return <li> {student.Name}</li>;
               })
             }
            </ul>
            <button onClick={this.handleChange}>
                Change Subtitle
            </button>
            </>
        );
    }
}

export default ListStudent;