interface Props {
    title: string;
    value: number;
    color: string;
}

const SummaryCard: React.FC<Props> = ({ title, value, color }) => {
    return (
        <div className="bg-white p-4 pb-5 rounded-xl shadow-sm border border-gray-300">
            <p className="text-base xl:text-sm text-gray-500">{title}</p>
            <h2 className={`mt-1 text-3xl font-semibold ${color}`}>₹{value}</h2>
        </div>
    );
};

export default SummaryCard;