import styled from 'styled-components';

const ImageStyle = styled.div`
  border-radius: 8px 8px 0px 0px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0px 0px;
  }

  .error-container {
    border-radius: 8px 8px 0px 0px;
    display: flex;
    background: #efefef;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: #efefef;
    min-height: 200px;

    .anticon-file-image {
      font-size: 48px;
      margin-bottom: 8px;
    }
  }
`;
export default ImageStyle;
