

const HeadingTitle = ({title, description}) => {
    return (
        <div className="text-center my-9 w-10/12 mx-auto space-y-2">
            <h2 className="font-bold lg:text-3xl text-xl">{title}</h2>
            <p className="text-sm lg:text-lg">{description}</p>
        </div>
    );
};

export default HeadingTitle;