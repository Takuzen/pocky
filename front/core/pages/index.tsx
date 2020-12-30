import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import MediaQuery from 'react-responsive'
import Media from 'styled-media-query'

const AddressMapMedium = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2304034959584!2d139.70667971525262!3d35.67132838019654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d03cf22d88f%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1609301088764!5m2!1sen!2sjp"
        width="600"
        height="450"
      ></iframe>
    </div>
  )
}

const AddressMapSmall = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2304034959584!2d139.70667971525262!3d35.67132838019654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d03cf22d88f%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1609301088764!5m2!1sen!2sjp"
        width="320"
        height="222"
      ></iframe>
    </div>
  )
}

const IndexPage = () => (
  <Layout title="Pocky SALON & STORE">
    <Wrapper>
      <TopSection>
        <Menu>
          <Reservation>
            <ReservationIcon>
              <MediaQuery maxDeviceWidth={767}>
                <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
                  <Image
                    src="/icons/cut-outline.svg"
                    alt="cut-icon"
                    width={20}
                    height={20}
                  ></Image>
                </Link>
              </MediaQuery>
              <MediaQuery minDeviceWidth={768}>
                <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
                  <Image
                    src="/icons/cut-outline.svg"
                    alt="cut-icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </MediaQuery>
            </ReservationIcon>
            <Link href="https://www.yoyakul.jp/beauty-user/user/pocky/customerTop">
              <p>Reservation</p>
            </Link>
          </Reservation>
          <Instagram>
            <InstagramIcon>
              <MediaQuery maxDeviceWidth={767}>
                <Link href="https://www.instagram.com/denimyarou/?hl=en">
                  <Image
                    src="/icons/logo-instagram.svg"
                    alt="instagram-icon"
                    width={20}
                    height={20}
                  ></Image>
                </Link>
              </MediaQuery>
              <MediaQuery minDeviceWidth={768}>
                <Link href="https://www.instagram.com/denimyarou/?hl=en">
                  <Image
                    src="/icons/logo-instagram.svg"
                    alt="instagram-icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </MediaQuery>
            </InstagramIcon>
            <Link href="https://www.instagram.com/denimyarou/?hl=en">
              <p>Instagram</p>
            </Link>
          </Instagram>
          <OnlineStore>
            <OnlineStoreIcon>
              <MediaQuery maxDeviceWidth={767}>
                <Link href="https://pocky2020.base.ec/">
                  <Image
                    src="/icons/store-icon.svg"
                    alt="store-icon"
                    width={20}
                    height={20}
                  ></Image>
                </Link>
              </MediaQuery>
              <MediaQuery minDeviceWidth={768}>
                <Link href="https://pocky2020.base.ec/">
                  <Image
                    src="/icons/store-icon.svg"
                    alt="store-icon"
                    width={30}
                    height={30}
                  ></Image>
                </Link>
              </MediaQuery>
            </OnlineStoreIcon>
            <Link href="https://pocky2020.base.ec/">
              <p>Online Store</p>
            </Link>
          </OnlineStore>
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
      <PhotoSection>
        <PhotoWrapper>
          <Image
            src="/images/front.JPG"
            alt="front-image"
            width={700}
            height={500}
          ></Image>
        </PhotoWrapper>
      </PhotoSection>
      <MapSection>
        <Image
          src="/images/welcome-resized.jpg"
          alt="welcome-image"
          width={500}
          height={250}
          objectFit="contain"
        ></Image>
        <MediaQuery maxDeviceWidth={767}>
          <AddressMapSmall />
        </MediaQuery>
        <MediaQuery minDeviceWidth={768}>
          <AddressMapMedium />
        </MediaQuery>
        <Info>
          〒150-0001
          <br />
          東京都渋谷区神宮前3丁目27-14
          <br />
          Owner
          <br />
          Hiromu Yamada
          <br />
          山田 大夢
          <br />
          denimyarou@gmail.com
          <br />
          03-6447-4030
          <br />
          OPEN 11:00 - 21:00
        </Info>
      </MapSection>
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
  grid-template-columns: [tate0] 82% [tate1] 18% [tate2];
  grid-template-rows: [yoko0] 1fr [yoko1] 1fr [yoko2] 1fr;
  justify-items: end;
  align-items: center;
  margin-right: 30px;

  ${Media.lessThan('medium')`
    /* screen width is less than 768px (medium) */
    display: grid;
    grid-template-columns: [tate0] 1fr [tate1] 1fr [tate2];
    grid-template-rows: [yoko0] 1fr [yoko1] 1fr [yoko2] 1fr;
    justify-items: end;
    align-items: center;
    margin-right: 10px
  `}
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

const ReservationIcon = styled.image`
  ${Media.lessThan('medium')`
    margin-right: 5px;
  `}
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

const OnlineStoreIcon = styled.image`
  ${Media.lessThan('medium')`
    margin-right: 5px;
  `}
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

const InstagramIcon = styled.image`
  ${Media.lessThan('medium')`
    margin-right: 5px;
  `}
`

const Logo = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  justify-items: center;
`

const PockyLogo = styled.image`
  position: relative;
  top: -30px;

  ${Media.lessThan('medium')`
    position: relative;
    top: 0;
  `}
`

const ChevronIcon = styled.image`
  ${Media.lessThan('medium')`
    position: relative;
    top: -60px;
  `}
`

const PhotoSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  ${Media.lessThan('medium')`
    height: 50vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`

const PhotoWrapper = styled.div`
  ${Media.lessThan('medium')`
    position: relative;
    top: -30px;
  `}
`

const MapSection = styled.section`
  height: 100%;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-bottom: 30px;
`

const Info = styled.p`
  text-align: center;
  line-height: 2;
  font-family: 'Poppins', sans-serif;
  margin-top: 40px;
`
