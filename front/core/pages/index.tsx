import Link from 'next/link'
import Layout from '../components/Layout'
import styled from 'styled-components'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <StoreName>Pocky</StoreName>
    <StoreGenre>SALON & STORE </StoreGenre>
  </Layout>
)

export default IndexPage

const StoreName = styled.p``

const StoreGenre = styled.p``
