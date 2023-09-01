import styled from '@emotion/styled';

export const ThumbnailStyles = styled.li`
    aspect-ratio: 1/ 1;
    /* min-width: 50px;
    min-height: 50px; */
    background: gray;

    button {
        width: 100%;
        height: 100%;
        
        cursor: pointer;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;
