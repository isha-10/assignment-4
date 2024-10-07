import Image from "next/image";
import { useRouter } from "next/navigation";
import Card from "./component/StudentCard";
import StudentCard from "./component/StudentCard";

export default function Home() {
  const students = [
    { name: 'faiza', age: 16, rollNumber: '12345', studentClass: 'GIAIC' },
    { name: 'rania', age: 15, rollNumber: '12346', studentClass: 'GIAIC' },
    { name: 'saba', age: 17, rollNumber: '12347', studentClass: 'GIAIC' },
  ];

  return (
    <div className="bg-black-100 min-h-screen flex flex-col items-center justify-center py-10">
      <h1 className="text-3xl font-bold mb-6">Student ID Cards</h1>
      <div className="grid grid-cols-1
       sm:grid-cols-2 
       md:grid-cols-3 gap-6">
        {students.map((student, index) => (
          < StudentCard
            key={index}
            name={student.name}
            age={student.age}
            rollNumber={student.rollNumber}
            studentClass={student.studentClass}
          />
        ))}
      </div>
    </div>
  );
}

