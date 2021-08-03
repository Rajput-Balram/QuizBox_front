import React, { Component } from 'react'
import allFunctions from './Services/Functions';

export default class AllUserComponent extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user : [],
        }

    }
    componentDidMount() {
        // const id = JSON.parse(sessionStorage.getItem("admin")).id;
        allFunctions.getAllUser().then(
            (response) => {
                this.setState({ user: response.data });
            },
            (error) => {
                console.log(error);
            }
        )
    }
    render() {
        return (
            <div className="container">
                <h1>User Table</h1>
                <hr />
                {this.state.user.length > 0 ?
                    (<table className="table">
                        <thead>
                            <tr>
                                 
                                <th>S. No</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>mobile</th>
                                 
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.user.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.name.toUpperCase()}</td>
                                    <td>{item.email}</td>
                                    <td>{item.mobile}</td>
                                     
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    ) : <h5>No Data Found</h5>
                }
            </div>
        )
    }
}
