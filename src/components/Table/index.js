import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css"


function Table(props) {
    return (
        <div className="table tableContent">
            <table width="100%">
                <thead className="table-dark">
                    <tr>
                        <td>Image</td>
                        <td>First Name</td>
                        <td>Last Name</td>
                        <td>Email ID</td>
                        <td>Phone Number</td>
                    </tr>
                </thead>

                <tbody className="table-bordered">
                    {
                        props.results &&
                        props.results.map(function (element) {
                            return <tr>
                                <td><img className="roundImage" src={element.picture.thumbnail} alt="" /></td>
                                <td>{element.name.first}</td>
                                <td>{element.name.last}</td>
                                <td>{element.email}</td>
                                <td>{element.phone}</td>
                            </tr>;
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;