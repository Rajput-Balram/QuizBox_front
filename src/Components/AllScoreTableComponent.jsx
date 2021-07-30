import React, { Component } from 'react'
import allFunctions from "./Services/Functions"

export default class AllScoreTableComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scoreTable: [],
        }
    }
    componentDidMount() {
        // const id = JSON.parse(sessionStorage.getItem("admin")).id;
        allFunctions.getAllScoreTable().then(
            (response) => {
                this.setState({ scoreTable: response.data });
            },
            (error) => {
                console.log(error);
            }
        )
    }
    render() {
        return (
            <div className="container">
                <h1>Score Table</h1>
                <hr />
                {this.state.scoreTable.length > 0 ?
                    (<table className="table">
                        <thead>
                            <tr>
                                 
                                <th>S. No</th>
                                <th>User Name</th>
                                <th>Language</th>
                                <th>Score</th>
                                <th>Attempted On</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.scoreTable.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.userName.toUpperCase()}</td>
                                    <td>{item.category}</td>
                                    <td>{item.score}</td>
                                    <td>{item.date}</td>
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
