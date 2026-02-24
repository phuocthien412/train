import { ReactNode } from "react";

interface JobProps {
    title: string;
    icon: ReactNode;
    bgColor: string;
}

const Job: React.FC<JobProps> = ({ title, icon, bgColor }) => {
    return (
    <div className={`flex flex-col aspect-square items-center justify-center p-4 rounded-lg ${bgColor}`}>
        {icon}
        <p>{title}</p>
    </div>
    );
};

export default Job;