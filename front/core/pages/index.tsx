import Layout from '../components/Layout'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const AddressMap = () => {
  return (
    <div className="google-map-code">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12964.92161076721!2d139.7088684!3d35.6713284!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xebee27411fb235b0!2sPocky%20SALON%20%26%20STORE!5e0!3m2!1sen!2sjp!4v1608901241643!5m2!1sen!2sjp"
        width="600"
        height="450"
        style={{ border: 0 }}
        aria-hidden="false"
      ></iframe>
    </div>
  )
}

export { AddressMap }

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
              src="/images/pocky-logo.png"
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
            src="/images/front.png"
            alt="front-image"
            width={700}
            height={500}
          ></Image>
        </PhotoWrapper>
      </PhotoSection>
      <MapSection>
        <Image
          src="/images/welcome.jpg"
          alt="welcome-message"
          width={700}
          height={300}
        ></Image>
        <AddressMap></AddressMap>
        <Info>
          〒150-0001
          <br />
          東京都渋谷区神宮前3丁目27-14
          <br />
          Owner Hiromu Yamada（山田大夢）
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
  display: flex;
  justify-content: center;
  align-items: center;
`

const PhotoWrapper = styled.div``

const MapSection = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
`

const Info = styled.p`
  text-align: center;
  line-height: 2;
`
