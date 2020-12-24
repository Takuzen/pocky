import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const IndexPage = () => (
  <Layout title="Pocky SALON & STORE">
    <Wrapper>
      <TopSection>
        <Menu>
          <Reservation>
            <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
              <Image
                src="/icons/cut-outline.svg"
                alt="cut-icon"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
              <p>Reservation</p>
            </Link>
          </Reservation>
          <OnlineStore>
            <Link href="https://pocky2020.base.ec/">
              <Image
                src="/icons/store-icon.svg"
                alt="store-icon"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="https://pocky2020.base.ec/">
              <p>Online Store</p>
            </Link>
          </OnlineStore>
          <Instagram>
            <Link href="https://www.instagram.com/denimyarou/?hl=en">
              <Image
                src="/icons/logo-instagram.svg"
                alt="instagram-icon"
                width={30}
                height={30}
              ></Image>
            </Link>
            <Link href="https://www.instagram.com/denimyarou/?hl=en">
              <p>Instagram</p>
            </Link>
          </Instagram>
        </Menu>
        <Logo>
          <PockyLogo>
            <Image
              src="/images/pocky-logo.jpg"
              alt="pocky-logo"
              width={500}
              height={500}
            ></Image>
          </PockyLogo>
          <ChevronIcon>
            <Image
              src="/icons/chevron-down-outline.svg"
              alt="chevron-down-icon"
              width={50}
              height={50}
            ></Image>
          </ChevronIcon>
        </Logo>
      </TopSection>
      <PhotoSection></PhotoSection>
      <AboutSection></AboutSection>
      <MapSection></MapSection>
    </Wrapper>
  </Layout>
)

export default IndexPage

const Wrapper = styled.div``

const TopSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 20% 80%;
`

const Menu = styled.div`
  display: grid;
  grid-template-columns: [tate0] 90% [tate1] 10% [tate2];
  grid-template-rows: [yoko0] 1fr [yoko1] 1fr [yoko2] 1fr;
  justify-items: center;
  align-items: center;
`

const Reservation = styled.div`
  grid-column-start: tate1;
  grid-row-start: yoko0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-family: 'Poppins', sans-serif;

  :hover {
    opacity: 0.6;
    cursor: pointer;
    transition: 0.3s;
  }
`

const OnlineStore = styled.div`
  grid-column-start: tate1;
  grid-row-start: yoko1;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-family: 'Poppins', sans-serif;

  :hover {
    opacity: 0.6;
    cursor: pointer;
    transition: 0.3s;
  }
`

const Instagram = styled.div`
  grid-column-start: tate1;
  grid-row-start: yoko2;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  font-family: 'Poppins', sans-serif;

  :hover {
    opacity: 0.6;
    cursor: pointer;
    transition: 0.3s;
  }
`

const Logo = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  justify-items: center;
`

const PockyLogo = styled.image``

const ChevronIcon = styled.image``

const PhotoSection = styled.section`
  height: 100vh;
  width: 100vw;
`

const AboutSection = styled.section`
  height: 100vh;
  width: 100vw;
`

const MapSection = styled.section``
