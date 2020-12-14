import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage = () => (
  <Layout title="Pocky Home">
    <Wrapper>
      <LeftPanel>
        <SocialMediaIcons>
          <InstagramIcon>
            <Link href="https://www.instagram.com/denimyarou/?hl=pa">
              <Image
                src="/logo-instagram.svg"
                alt="logo-instagram"
                width={30}
                height={30}
              />
            </Link>
          </InstagramIcon>
          <FacebookIcon>
            <Link href="https://www.facebook.com/Pocky-SALON-STORE-109583650939677/">
              <Image
                src="/logo-facebook.svg"
                alt="logo-facebook"
                width={30}
                height={30}
              />
            </Link>
          </FacebookIcon>
          <StoreIcon>
            <Link href="https://pocky2020.base.ec/">
              <Image
                src="/store-icon.svg"
                alt="store-icon"
                width={30}
                height={30}
              />
            </Link>
          </StoreIcon>
        </SocialMediaIcons>
      </LeftPanel>
      <CenterPanel>
        <Image
          src="/pocky-logo.jpg"
          alt="pocky-logo"
          width={500}
          height={500}
        />
        {/*
        <Image
          src="/chevron-down-outline.svg"
          alt="chevron-down"
          width={50}
          height={50}
        />
        */}
      </CenterPanel>
      <RightPanel>
        <YoyakuBtn>
          <YoyakuText>
            <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
              予約はこちらから
            </Link>
          </YoyakuText>
          <YoyakuKasen></YoyakuKasen>
        </YoyakuBtn>
      </RightPanel>
    </Wrapper>
  </Layout>
)

export default IndexPage

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 20% 60% 20%;
`
const LeftPanel = styled.section``

const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 30px 0 0 2vw;
`

const InstagramIcon = styled.div`
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const FacebookIcon = styled.div`
  margin-bottom: 18px;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const StoreIcon = styled.div`
  width: 28px;
  margin-left: 1px;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const CenterPanel = styled.section`
  display: grid;
  justify-items: center;
  align-items: center;
`

const RightPanel = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-end;
`

const YoyakuBtn = styled.div`
  margin: 30px 2vw 0 0;
`

const YoyakuText = styled.p`
  font-size: 15px;
  letter-spacing: 1px;
  white-space: nowrap;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const YoyakuKasen = styled.hr`
  margin: 5px 0 0 0;
  width: 118px;
  height: 3px;
  background: tomato;
  border: none;
  border-radius: 10px;
`
