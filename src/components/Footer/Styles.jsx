import styled from 'styled-components';

export const StyledFooter = styled.footer`
  margin-top: 7.2rem;
  section {
    border-top: 0.1rem solid #e3e3e2;
  }
`;

export const StyledServiceUl = styled.ul`
  display: flex;
  width: 144rem;
  margin: 3rem auto 5rem;
  font-weight: 500;
  line-height: 1.5;

  li,
  p,
  a {
    display: block;
  }

  li {
    width: 25%;

    p {
      font-weight: 600;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const StyledSNSLinkMenu = styled.li`
  a {
    display: inline-block;
    width: 2.5rem;
    margin-right: 0.7rem;
  }
  img {
    width: 100%;
  }

  a:nth-child(5) {
    img {
      border: 0.2rem solid #adadad;
      border-radius: 2.5rem 2.5rem 2.5rem 2.5rem;
    }
  }
`;

export const StyledStoreLinkMenu = styled.li`
  svg {
    font-size: 2.2rem;
    width: 2.2rem !important;
    margin: 0 0.5rem;
    margin-bottom: 0.5rem;
  }
  span {
    display: inline-block;
    vertical-align: super;
  }
`;

export const StyledComponyInfoWrapper = styled.div`
  margin: 3rem auto;
  width: 144rem;
  line-height: 1.5;
`;

export const StyledCopyright = styled.p`
  margin-bottom: 2.5rem;
`;

export const StyledFlexWrapper = styled.div`
  display: flex;
`;

export const StyledAddress = styled.address`
  width: 50%;
  span {
    display: block;
  }
  a {
    text-decoration-line: underline;
  }
`;

export const StyledPayDescription = styled.div`
  width: 50%;
  p {
    display: inline-block;
  }

  img {
    display: inline-block;
    width: 34px;
    height: 34px;
    margin-left: 34px;
  }
`;
