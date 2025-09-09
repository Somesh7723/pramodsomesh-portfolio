import "../../styles/socialblock.css"

const SocialBlock = ({icon, logo, url}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer" className="social-block" style={{ backgroundImage: `url(${icon})` }}>
            <a href={url} target="_blank" rel="noreferrer" className="hover-logo" style={{ backgroundImage: `url(${logo})` }}></a>
        </a>
    );
}

export default SocialBlock;