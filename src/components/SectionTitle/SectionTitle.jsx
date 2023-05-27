

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <h2 className="text-yellow-500 italic mb-3">---{subHeading}---</h2>
            <p className="uppercase text-2xl font-medium border-y-[3px] w-4/12 mx-auto p-4">{heading}</p>
        </div>
    );
};

export default SectionTitle;