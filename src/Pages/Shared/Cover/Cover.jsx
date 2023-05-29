

const Cover = ({ img, title, description }) => {
    return (
        <div className="hero h-[550px]" style={{ backgroundImage: `url("${img}")` }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="bg-black/40 px-72 lg:px-96 py-20">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{description}</p>
                    </div></div>
            </div>
        </div>
    );
};

export default Cover;