import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    margin: 10px 0px;
    max-width: 200px;
`;

const ImageThumb = (props) => {
    return (
        <Image {...props} />
    )
};

export default ImageThumb;