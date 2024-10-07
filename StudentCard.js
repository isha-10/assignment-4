import React from 'react';

function StudentCard({ name,age,rollNumber, studentClass }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm text-center transform transition hover:scale-150 duration-500">
      <h2 className="text-blue-600">StudentName:{name}</h2>
      <p className="text-blue-600">Age: {age}</p>
      
      <p className="text-blue-600">Roll No: {rollNumber}</p>
      
      <p className="text-blue-600">Class: {studentClass}</p>
    </div>
  );
}

export default StudentCard;