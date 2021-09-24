import React from 'react';
import Album from '../Album';
import './styles.scss';

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