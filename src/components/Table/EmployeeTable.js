import React from 'react';


const Table = (comp) => {
    return (
        <table className="table table-bordered text-center">
            <thead>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">
                        <span onClick={() => comp.sortEmployeeInfo("name", "first", "last")}> Name 
                        <i class="bi bi-filter sort icon"></i></span></th>
                    <th scope="col">Email</th>
                    <th scope="col">
                        <span onClick={() => comp.sortEmployeeInfo("location", "state", "city")}>Location 
                        <i class="bi bi-filter sort icon"></i></span></th>
                </tr>
            </thead>
            <tbody>
                {comp.state.filteredEmp.map((employee) => {
                    const { first, last } = employee.name;
                    const { state } = employee.location
                    const name = `${first} ${last}`;
                    const location = `${state} `
                    return (
                        <tr key={employee.login.uuid}>
                            <td>
                                <img src={employee.picture.large} alt='employee name' />
                            </td>
                            <td className="align-middle">{name}</td>
                            <td className="align-middle"> 
                              <a href={`mailto:${employee.email}`}>{employee.email}</a> 
                            </td>
                            <td className="align-middle">
                                <span>{location}</span>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default Table;