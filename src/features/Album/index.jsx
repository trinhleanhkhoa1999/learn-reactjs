import React from 'react';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            name: 'US-UK Những Bản Hit Quốc Dân',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/09/20/8/7/8/6/1632122600372_300.jpg',

        },
        {
            id: 1,
            name: 'Ballad Việt Không Thể Bỏ Qua',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/09/20/8/7/8/6/1632121308010_300.jpg',

        },
        {
            id: 1,
            name: 'V-POP Hay Nhất 2021',
            thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2021/04/29/c/2/f/d/1619708725892_300.jpg',

        },
    ]
    return (
        <div>
            <h2>Có thể bạn sẽ thích nghe đây</h2>
            <AlbumList dataAlbumList={albumList} />
        </div>
    );
}

export default AlbumFeature;