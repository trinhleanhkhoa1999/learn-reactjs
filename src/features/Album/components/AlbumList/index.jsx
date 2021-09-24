import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'
import Album from '../Album';

AlbumList.propTypes = {

};

function AlbumList(props) {
    const { dataAlbumList } = props;
    return (
        <div>
            <ul className="album--List">
                {dataAlbumList.map(dataAlbum => (
                    <li key={dataAlbum.id}>
                        <Album dataAlbum={dataAlbum} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AlbumList;