import React from 'react';
import './styles.scss';

Album.propTypes = {

};

function Album(props) {
    const { dataAlbum } = props;
    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={dataAlbum.thumbnailUrl} alt="dataAlbum.name" />
            </div>
            <p className="album__name">{dataAlbum.name}</p>
        </div>
    );
}

export default Album;