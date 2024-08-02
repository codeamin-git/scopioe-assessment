import './Loader.css'

const Loader = () => {
    return (
        <div className='flex items-center justify-center'>
            <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        </div>
        </div>

    );
};

export default Loader;