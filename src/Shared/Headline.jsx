
const Headline = ({subheading, heading}) => {
    return (
        <div className="text-center pb-16">
            <h3 className="text-md font-medium text-cyan-700">{subheading}</h3>
            <h1 className="text-3xl font-semibold text-cyan-400">{heading}</h1>
        </div>
    );
};

export default Headline;