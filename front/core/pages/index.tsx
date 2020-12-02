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
                src="/../static/logo-instagram.svg"
                alt="logo-instagram"
                width={30}
                height={30}
              />
            </Link>
          </InstagramIcon>
          <FacebookIcon>
            <Link href="https://www.facebook.com/Pocky-SALON-STORE-109583650939677/">
              <Image
                src="/../static/logo-facebook.svg"
                alt="logo-facebook"
                width={30}
                height={30}
              />
            </Link>
          </FacebookIcon>
        </SocialMediaIcons>
      </LeftPanel>
      <CenterPanel>
        <StoreInfo>
          <StoreName>Pocky</StoreName>
          <StoreGenre>SALON & STORE </StoreGenre>
        </StoreInfo>
        <Image
          src="/../static/chevron-down-outline.svg"
          alt="chevron-down"
          width={50}
          height={50}
        />
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
  width: 100vw;
  height: 100vh;
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

const FacebookIcon = styled.div`
  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const InstagramIcon = styled.div`
  margin-bottom: 15px;

  :hover {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.3s;
  }
`

const CenterPanel = styled.section`
  display: grid;
  grid-template-rows: 85% 15%;
  justify-items: center;
  align-items: center;
`

const StoreInfo = styled.div`
  line-height: 2;
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

const StoreName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap');
  font-family: 'Sansita Swashed', cursive;
  font-size: 100px;
  text-align: center;
`

const StoreGenre = styled.p`
  text-align: center;
  font-weight: bold;
`
