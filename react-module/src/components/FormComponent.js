import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function FormComponent() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the user data to the array
        if(name !== '')
        setUsers([...users, { name, age, gender, height, weight }]);
        // Reset the form inputs
        setName('');
        setAge('');
        setGender('');
        setHeight('');
        setWeight('');
    };

    const handlePrint = () => {
        const doc = new jsPDF();
        const tableHeaders = ['Name', 'Age', 'Gender', 'Height (cm)', 'Weight (kg)'];
        const tableData = users.map((user) => [user.name, user.age, user.gender, user.height, user.weight]);

        doc.autoTable({
            body: [tableHeaders, ...tableData],
            margin: { top: 20 },
            styles: {
                cellPadding: 0.5,
                fontSize: 12,
                cellWidth: 'wrap',
                halign: 'center',
            },
        });
        doc.save('users.pdf');
    };

    return (
        <div className="main">
            <form onSubmit={handleSubmit} className="p-3 border calculator-box">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        className="form-control"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="gender">Gender:</label>
                    <select
                        className="form-control"
                        id="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="height">Height (cm):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                    />
                </div>
                <div className="form-group mt-2">
                    <label htmlFor="weight">Weight (kg):</label>
                    <input
                        type="number"
                        className="form-control"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-4">
                    Submit
                </button>
                <button type="button" className="btn btn-primary mt-2" onClick={handlePrint}>
                    Print
                </button>
            </form>
        </div>
    );
}

export default FormComponent
