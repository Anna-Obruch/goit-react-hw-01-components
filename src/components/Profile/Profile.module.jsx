import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: auto;
  margin-top: 50px;
  width: min-content;

  background: #fde4fd;
`;
export const Description = styled.div`
  position: relative;
  text-align: center;

  width: 600px;
  padding: 16px;

  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(89, 213, 189, 0.45);
`;
export const AvatarImg = styled.img`
  position: absolute;
  transform: translate(-50px, -60px);

  max-height: 92px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;
export const AvatarName = styled.p`
  font-weight: 900;
  line-height: 1.187;

  margin-top: 49px;
  margin-bottom: 0;
  color: #000000;
`;
export const AvatarTag = styled.p`
  font-size: 12px;

  margin-top: 10px;
  margin-bottom: 0;
  color: #969696;
`;
export const AvatarLocation = styled.p`
  font-weight: 800;
  font-size: 12px;

  margin-top: 10px;
  margin-bottom: 0;
  color: #000000;
`;
export const ProfileStats = styled.ul`
  list-style: none;
  display: flex;
  padding: 12px;
  margin: 0;
  li {
    display: grid;
    width: 80px;
    justify-items: center;
    :not(:last-child) {
      border-right: 1px solid #999999;
    }
    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;
export const StatsLabel = styled.span`
  font-weight: 600;
  font-size: 12px;

  margin-bottom: 6px;
  color: #999999;
`;
export const StatsQuantity = styled.span`
  font-weight: 700;
  font-size: 24px;

  color: #000000;
`;
