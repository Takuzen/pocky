import Layout from '../components/Layout'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout title="Pocky Home">
    <Wrapper>
      <LeftPanel></LeftPanel>
      <CenterPanel>
        <StoreInfo>
          <StoreName>Pocky</StoreName>
          <StoreGenre>SALON & STORE </StoreGenre>
        </StoreInfo>
      </CenterPanel>
      <RightPanel></RightPanel>
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

const CenterPanel = styled.section`
  display: grid;
  grid-template-rows: 90% 10%;
  justify-items: center;
  align-items: center;
`

const StoreInfo = styled.div`
  line-height: 2;
`

const RightPanel = styled.section``

const StoreName = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@700&display=swap');
  font-family: 'Sansita Swashed', cursive;
  font-size: 100px;
  text-align: center;
`

const StoreGenre = styled.p`
  text-align: center;
`
