import PropTypes from "prop-types"

const YoutubeEmbed = ({embedId}) => (
    <div className="video-responsive">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/cb2s0ePEdZY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
)

YoutubeEmbed.prototype = {
    embedId: PropTypes.string.isRequired
}

export default YoutubeEmbed;