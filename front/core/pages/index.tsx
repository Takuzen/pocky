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
  grid-template-columns: 10% 60% 30%;
`
const LeftPanel = styled.section``

const CenterPanel = styled.section`
  display: grid;
  grid-template-rows: 90% 10%;
`

const StoreInfo = styled.div``

const RightPanel = styled.section``

const StoreName = styled.p``

const StoreGenre = styled.p``
